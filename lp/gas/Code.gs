// ============================================================
// KOGEI CODE — お問い合わせフォーム GAS バックエンド
// ============================================================

// ── 設定 ──────────────────────────────────────────────────────
// ADMIN_EMAIL は複数宛に送る場合カンマ区切りで列挙可 (例: "a@x.com, b@x.com, c@x.com")
var CONFIG = {
  ADMIN_EMAIL: "REPLACE_WITH_ADMIN_EMAILS",     // 管理者通知先（要変更 / カンマ区切りで複数可）
  SHEET_NAME: "お問い合わせ",
  FROM_NAME: "KOGEI CODE",
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

// ── CORS プリフライト対応 ──────────────────────────────────────
function doGet() {
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

  var body = [
    "KOGEI CODE LP より新しいお問い合わせがありました。",
    "",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "■ お名前:       " + (data.name || "—"),
    "■ 会社名:       " + (data.company || "—"),
    "■ メール:       " + (data.email || "—"),
    "■ 電話番号:     " + (data.phone || "—"),
    "■ 紹介者名:     " + (data.referrer || "—"),
    "■ 関心内容:     " + interestLabel,
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "受信日時: " + Utilities.formatDate(new Date(), "Asia/Tokyo", "yyyy/MM/dd HH:mm:ss"),
  ].join("\n");

  MailApp.sendEmail({
    to: CONFIG.ADMIN_EMAIL,
    subject: subject,
    body: body,
    name: CONFIG.FROM_NAME,
  });
}

// ── 自動返信メール ────────────────────────────────────────────
function sendAutoReply(data) {
  if (!data.email) return;

  var interest = data.interest || "";
  var name = data.name || "お客様";
  var subject = "【KOGEI CODE】お問い合わせありがとうございます";

  var bodyParts = [
    name + " 様",
    "",
    "この度は KOGEI CODE にご関心をお寄せいただき、",
    "誠にありがとうございます。",
    "",
  ];

  if (interest === "briefing") {
    bodyParts.push(
      "プライベートブリーフィングのご希望を承りました。",
      "担当者より 2 営業日以内に日程をご連絡いたします。",
      ""
    );
  } else if (interest === "visit") {
    bodyParts.push(
      "マリーナ視察のご希望を承りました。",
      "担当者より 2 営業日以内に詳細をご連絡いたします。",
      ""
    );
  } else {
    bodyParts.push(
      "お問い合わせ内容を確認の上、",
      "担当者より 2 営業日以内にご連絡いたします。",
      ""
    );
  }

  bodyParts.push(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "KOGEI CODE",
    "日本の美が、海の上で目を覚ます。",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "※ 本メールは自動送信です。",
    "  ご不明点がございましたら、このメールにご返信ください。"
  );

  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    body: bodyParts.join("\n"),
    name: CONFIG.FROM_NAME,
    replyTo: CONFIG.ADMIN_EMAIL,
  });
}
