// ============================================================
// KOGEI CODE — お問い合わせフォーム GAS バックエンド
// ============================================================
// 想定デプロイ: Google Workspace の contact@kogeicode.info アカウント配下。
// スクリプト所有者 = contact@kogeicode.info に置くことで、GmailApp 送信時の
// From: 欄が自動的に contact@kogeicode.info になる。
// ============================================================

// ── 設定 ──────────────────────────────────────────────────────
// ADMIN_EMAIL: 管理者通知の送信先。contact@ 配下で受けて、そこから
// メールサーバ側ルールで下記メンバーへ転送される想定:
//   - 植村  : m.uemura@kogeicode.info
//   - 伊石  : y.iseki@kogeicode.info
//   - 永宮  : m.nagamiya@kogeicode.info
//   - 大城  : y.oshiro@kogeicode.info
// 直接複数宛にしたい場合はカンマ区切りで列挙可 (例: "a@x.com, b@x.com")
var CONFIG = {
  ADMIN_EMAIL: "contact@kogeicode.info",
  SHEET_NAME: "お問い合わせ",
  FROM_NAME: "KOGEI CODE",
  LOGO_URL: "https://kogeicode.com/images/logo-mark.png",
  SITE_URL: "https://kogeicode.com/",
};

// ── ブランドカラー ────────────────────────────────────────────
var BRAND = {
  navy: "#0A0A0A",
  navyDark: "#050505",
  gold: "#C9A962",
  goldLight: "#D4B876",
  bgLight: "#F7F5F1",
  text: "#2A2A2A",
  textMuted: "#888888",
};

// ── 関心内容ラベル変換 ────────────────────────────────────────
var INTEREST_LABELS = {
  briefing: "プライベートブリーフィング",
  visit: "マリーナ視察",
  other: "その他",
};

// ── Web アプリ POST エンドポイント ─────────────────────────────
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    saveToSheet(data);
    sendAdminNotification(data);
    sendAutoReply(data);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "ok" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    Logger.log("doPost error: " + err.message);
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ── GET: ヘルスチェック + スプレッドシート紐付け診断 ─────────
// ?info=1 でスプレッドシートのID/URL/名前を返す（トラブルシュート用）
function doGet(e) {
  var params = (e && e.parameter) || {};
  if (params.info === "1") {
    try {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var payload;
      if (ss) {
        payload = {
          status: "ok",
          bound: true,
          spreadsheet_id: ss.getId(),
          spreadsheet_url: ss.getUrl(),
          spreadsheet_name: ss.getName(),
          sheet_name: CONFIG.SHEET_NAME,
        };
      } else {
        payload = {
          status: "ok",
          bound: false,
          note: "このスクリプトはスプレッドシートに紐付いていない（standalone）",
        };
      }
      return ContentService.createTextOutput(JSON.stringify(payload, null, 2))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: "error", message: err.message })
      ).setMimeType(ContentService.MimeType.JSON);
    }
  }
  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok" })
  ).setMimeType(ContentService.MimeType.JSON);
}

// ── スプレッドシートへ記録 ─────────────────────────────────────
function saveToSheet(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    sheet.appendRow([
      "タイムスタンプ",
      "お名前",
      "会社名",
      "メールアドレス",
      "電話番号",
      "紹介者名",
      "関心内容",
      "関心内容（ラベル）",
    ]);
    sheet.getRange("1:1").setFontWeight("bold");
  }

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.company || "",
    data.email || "",
    data.phone || "",
    data.referrer || "",
    data.interest || "",
    INTEREST_LABELS[data.interest] || data.interest || "",
  ]);
}

// ── 管理者通知メール ──────────────────────────────────────────
function sendAdminNotification(data) {
  var interestLabel = INTEREST_LABELS[data.interest] || data.interest || "未選択";
  var subject = "【KOGEI CODE】新しいお問い合わせ: " + interestLabel;
  var timestamp = Utilities.formatDate(new Date(), "Asia/Tokyo", "yyyy/MM/dd HH:mm");

  var textBody = buildAdminText(data, interestLabel, timestamp);
  var htmlBody = buildAdminHtml(data, interestLabel, timestamp);

  GmailApp.sendEmail(CONFIG.ADMIN_EMAIL, subject, textBody, {
    name: CONFIG.FROM_NAME,
    htmlBody: htmlBody,
    replyTo: data.email || CONFIG.ADMIN_EMAIL,
  });
}

// ── 自動返信メール ────────────────────────────────────────────
function sendAutoReply(data) {
  if (!data.email) return;

  var interest = data.interest || "";
  var name = data.name || "お客様";
  var subject = "【KOGEI CODE】お問い合わせありがとうございます";

  var textBody = buildAutoReplyText(name, interest);
  var htmlBody = buildAutoReplyHtml(name, interest);

  GmailApp.sendEmail(data.email, subject, textBody, {
    name: CONFIG.FROM_NAME,
    htmlBody: htmlBody,
    replyTo: CONFIG.ADMIN_EMAIL,
  });
}

// ============================================================
// HTML / テキストテンプレート
// ============================================================

// ── 管理者通知: プレーンテキスト fallback ─────────────────────
function buildAdminText(data, interestLabel, timestamp) {
  return [
    "KOGEI CODE LP より新しいお問い合わせがありました。",
    "",
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    "■ お名前:       " + (data.name || "—"),
    "■ 会社名:       " + (data.company || "—"),
    "■ メール:       " + (data.email || "—"),
    "■ 電話番号:     " + (data.phone || "—"),
    "■ 紹介者名:     " + (data.referrer || "—"),
    "■ 関心内容:     " + interestLabel,
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "受信日時: " + timestamp,
  ].join("\n");
}

// ── 管理者通知: HTML ──────────────────────────────────────────
function buildAdminHtml(data, interestLabel, timestamp) {
  var rows = [
    { label: "お名前", value: data.name || "—" },
    { label: "会社名", value: data.company || "—" },
    { label: "メール", value: data.email || "—" },
    { label: "電話番号", value: data.phone || "—" },
    { label: "紹介者名", value: data.referrer || "—" },
    { label: "関心内容", value: interestLabel },
  ].map(function (r) {
    return '<tr>' +
      '<td style="padding:14px 0;border-bottom:1px solid #eeeae0;color:' + BRAND.gold + ';font-size:11px;letter-spacing:0.15em;text-transform:uppercase;width:110px;vertical-align:top;">' + escapeHtml(r.label) + '</td>' +
      '<td style="padding:14px 0;border-bottom:1px solid #eeeae0;color:' + BRAND.text + ';font-size:14px;line-height:1.7;">' + escapeHtml(r.value) + '</td>' +
    '</tr>';
  }).join("");

  return [
    '<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light"></head>',
    '<body style="margin:0;padding:0;background:' + BRAND.bgLight + ';font-family:-apple-system,BlinkMacSystemFont,\'Hiragino Sans\',\'Noto Sans JP\',\'Yu Gothic\',sans-serif;">',
      '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:' + BRAND.bgLight + ';padding:40px 20px;">',
        '<tr><td align="center">',
          '<table role="presentation" width="560" cellspacing="0" cellpadding="0" border="0" style="background:#ffffff;max-width:560px;">',
            // Header (light)
            '<tr><td style="background:#ffffff;padding:40px 40px 24px 40px;text-align:center;">',
              '<img src="' + CONFIG.LOGO_URL + '" alt="KOGEI CODE" width="72" style="height:auto;display:inline-block;max-width:72px;" />',
              '<p style="margin:20px 0 0 0;color:' + BRAND.gold + ';font-size:10px;letter-spacing:0.45em;text-transform:uppercase;font-weight:500;">New Inquiry</p>',
              '<div style="width:24px;height:1px;background:' + BRAND.gold + ';margin:16px auto 0 auto;"></div>',
            '</td></tr>',
            // Title
            '<tr><td style="padding:24px 40px 8px 40px;text-align:center;">',
              '<h1 style="margin:0;color:' + BRAND.navy + ';font-size:18px;font-weight:500;letter-spacing:0.04em;line-height:1.6;">新しいお問い合わせ</h1>',
              '<p style="margin:12px 0 0 0;color:' + BRAND.textMuted + ';font-size:12px;letter-spacing:0.1em;">' + escapeHtml(interestLabel) + '</p>',
            '</td></tr>',
            // Detail table
            '<tr><td style="padding:32px 40px 24px 40px;">',
              '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;border-top:1px solid #eeeae0;">' + rows + '</table>',
            '</td></tr>',
            // Timestamp
            '<tr><td style="padding:0 40px 40px 40px;color:' + BRAND.textMuted + ';font-size:11px;letter-spacing:0.08em;text-align:center;">',
              '受信日時: ' + escapeHtml(timestamp),
            '</td></tr>',
            // Footer
            '<tr><td style="padding:20px 40px;text-align:center;color:' + BRAND.textMuted + ';font-size:10px;letter-spacing:0.1em;border-top:1px solid #eeeae0;">',
              '&copy; 2026 KOGEI CODE',
            '</td></tr>',
          '</table>',
        '</td></tr>',
      '</table>',
    '</body></html>',
  ].join("");
}

// ── 自動返信: プレーンテキスト fallback ───────────────────────
function buildAutoReplyText(name, interest) {
  var parts = [
    name + " 様",
    "",
    "この度は KOGEI CODE にご関心をお寄せいただき、",
    "誠にありがとうございます。",
    "",
  ];
  if (interest === "briefing") {
    parts.push(
      "プライベートブリーフィングのご希望を承りました。",
      "担当者より 2 営業日以内に日程をご連絡いたします。"
    );
  } else if (interest === "visit") {
    parts.push(
      "マリーナ視察のご希望を承りました。",
      "担当者より 2 営業日以内に詳細をご連絡いたします。"
    );
  } else {
    parts.push(
      "お問い合わせ内容を確認の上、",
      "担当者より 2 営業日以内にご連絡いたします。"
    );
  }
  parts.push(
    "",
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    "KOGEI CODE",
    "日本の美が、海の上で目を覚ます。",
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "※ 本メールは自動送信です。",
    "  ご不明点がございましたら、このメールにご返信ください。"
  );
  return parts.join("\n");
}

// ── 自動返信: HTML ────────────────────────────────────────────
function buildAutoReplyHtml(name, interest) {
  var nextStep;
  if (interest === "briefing") {
    nextStep = "プライベートブリーフィングのご希望を承りました。<br>担当者より 2 営業日以内に日程をご連絡いたします。";
  } else if (interest === "visit") {
    nextStep = "マリーナ視察のご希望を承りました。<br>担当者より 2 営業日以内に詳細をご連絡いたします。";
  } else {
    nextStep = "お問い合わせ内容を確認の上、<br>担当者より 2 営業日以内にご連絡いたします。";
  }

  return [
    '<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light"></head>',
    '<body style="margin:0;padding:0;background:' + BRAND.bgLight + ';font-family:-apple-system,BlinkMacSystemFont,\'Hiragino Sans\',\'Noto Sans JP\',\'Yu Gothic\',sans-serif;">',
      '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:' + BRAND.bgLight + ';padding:40px 20px;">',
        '<tr><td align="center">',
          '<table role="presentation" width="560" cellspacing="0" cellpadding="0" border="0" style="background:#ffffff;max-width:560px;">',
            // Header (light, minimal)
            '<tr><td style="background:#ffffff;padding:48px 40px 32px 40px;text-align:center;">',
              '<img src="' + CONFIG.LOGO_URL + '" alt="KOGEI CODE" width="88" style="height:auto;display:inline-block;max-width:88px;" />',
              '<p style="margin:24px 0 0 0;color:' + BRAND.gold + ';font-size:10px;letter-spacing:0.5em;text-transform:uppercase;">Thank You</p>',
              '<div style="width:24px;height:1px;background:' + BRAND.gold + ';margin:16px auto 0 auto;"></div>',
            '</td></tr>',
            // Greeting
            '<tr><td style="padding:16px 40px 4px 40px;text-align:center;">',
              '<p style="margin:0;color:' + BRAND.navy + ';font-size:20px;font-weight:500;letter-spacing:0.05em;">' + escapeHtml(name) + ' 様</p>',
            '</td></tr>',
            // Body
            '<tr><td style="padding:24px 48px 8px 48px;">',
              '<p style="margin:0 0 20px 0;color:' + BRAND.text + ';font-size:14px;line-height:2;">',
                'この度は KOGEI CODE にご関心をお寄せいただき、<br>誠にありがとうございます。',
              '</p>',
              '<p style="margin:0;color:' + BRAND.text + ';font-size:14px;line-height:2;">' + nextStep + '</p>',
            '</td></tr>',
            // Tagline card
            '<tr><td style="padding:32px 48px 48px 48px;">',
              '<div style="padding:24px 28px;background:' + BRAND.bgLight + ';border-left:2px solid ' + BRAND.gold + ';">',
                '<p style="margin:0 0 6px 0;color:' + BRAND.gold + ';font-size:10px;letter-spacing:0.4em;text-transform:uppercase;">KOGEI CODE</p>',
                '<p style="margin:0;color:' + BRAND.navy + ';font-size:14px;line-height:1.9;font-weight:500;letter-spacing:0.05em;">日本の美が、海の上で目を覚ます。</p>',
              '</div>',
            '</td></tr>',
            // Footer (light)
            '<tr><td style="padding:20px 40px;text-align:center;color:' + BRAND.textMuted + ';font-size:10px;line-height:1.9;letter-spacing:0.08em;border-top:1px solid #eeeae0;">',
              '※ 本メールは自動送信です。<br>',
              'ご不明点がございましたら、このメールにご返信ください。',
            '</td></tr>',
          '</table>',
        '</td></tr>',
      '</table>',
    '</body></html>',
  ].join("");
}

// ── ユーティリティ ────────────────────────────────────────────
function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
