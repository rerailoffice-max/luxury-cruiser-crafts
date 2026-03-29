# Figma カタログ制作ガイド

## CRUISER × 伝統工芸 カタログ
**デザインリファレンス: not a hotel**

---

## 📋 制作段取り

### Phase 1: 準備（Figmaセットアップ）

1. **新規プロジェクト作成**
   - サイズ: A4 (210 × 297mm)
   - ページ数: 32ページ
   - Bleed: 3mm
   - マージン: 20mm

2. **デザインシステム構築**
   - カラースタイル登録
   - タイポグラフィスタイル登録
   - グリッドシステム設定（12カラム）

3. **コンポーネント作成**
   - スペックカード
   - ページナンバー
   - キャプション
   - セクションディバイダー

---

### Phase 2: 画像生成

`prompts_image_generation.md` のプロンプトを使用して以下を生成:

- [ ] Lexus LY680 サロン・キャビン（4枚）
- [ ] Lexus LY650 ZEN空間（4枚）
- [ ] Yamaha EXULT 43 海と光（4枚）
- [ ] Yamaha PRESTIGE F4.9 イノベーション（4枚）
- [ ] Toyota Ponam-35/31（3枚）
- [ ] 職人シーン（4枚）

---

### Phase 3: レイアウト制作

ページ構成に従って各ページを制作

---

## 🎨 デザインシステム

### カラーパレット

| 用途 | カラー | HEX |
|------|--------|-----|
| プライマリゴールド | ███ | `#C9A962` |
| ライトゴールド | ███ | `#E8D5A3` |
| ブラック | ███ | `#1a1a1a` |
| ダークグレー | ███ | `#2d2d2d` |
| ライトグレー | ███ | `#f5f5f5` |
| アクセントレッド | ███ | `#8B0000` |

### タイポグラフィ

| 用途 | フォント | ウェイト |
|------|----------|---------|
| 英語見出し | Playfair Display | 300-700 |
| 日本語見出し | Shippori Mincho | 400-600 |
| 日本語本文 | Noto Sans JP | 300-500 |
| 英語本文・スペック | Inter | 300-400 |

### グリッド設定

```
Columns: 12
Gutter: 16px
Margin: 40px
```

---

## 📖 ページ構成（32ページ）

### 表紙 (P.1)
```
┌─────────────────────────┐
│                         │
│   [Full-bleed Hero]     │
│   Yacht at golden hour  │
│                         │
│  CRUISER × 伝統工芸     │
│  日本の美をまとう、海上の邸宅 │
│  ___________________    │
└─────────────────────────┘
```

### イントロスプレッド (P.2-3)
```
┌────────────┬────────────┐
│            │            │
│  「千年の技が、│  [Yacht    │
│   海を渡る」  │  Interior] │
│            │            │
└────────────┴────────────┘
```

### クルーザー特集 (P.6-9: Lexus LY680)
```
P.6          P.7                P.8                P.9
┌─────────┐  ┌──────────────────────────────────┐  ┌─────────┐
│         │  │                                  │  │ □ □ □   │
│ [Ext.]  │  │     [Interior Spread]            │  │ □ □ □   │
│         │  │                    ┌──────┐      │  │ Details │
│         │  │                    │Specs │      │  │         │
└─────────┘  └──────────────────────────────────┘  └─────────┘
```

### 工芸カタログ (P.22-25)
```
┌─────────────────────────┐
│  □    □    □    │
│  金沢箔  蒔絵   螺鈿   │
│                         │
│  □    □    □    │
│  組子   和紙   西陣織  │
│                         │
│  □    □    □    │
│  輪島塗  松本民芸 江戸切子 │
└─────────────────────────┘
```

---

## 🤖 Figma AI (Make) プロンプト

### 全体デザイン用

```
Design a 32-page luxury yacht catalog combining Japanese cruisers
(Lexus LY680, LY650, Yamaha EXULT 43, PRESTIGE F4.9, Toyota Ponam-35,
Ponam-31) with traditional Japanese crafts.

Style reference: 'not a hotel' catalog - characterized by oversized
full-bleed photography, extreme negative space, minimal typography,
and sophisticated restraint.

Color palette: deep black (#1a1a1a), warm white, gold accents (#C9A962)
Typography: Playfair Display for English, Shippori Mincho for Japanese
Layout: A4 portrait (210x297mm), 12-column grid, asymmetric compositions

Emphasize: 千年の技 (thousand-year craftsmanship) with modern luxury yachting
```

### 表紙用

```
Create a luxurious catalog cover:
- Full-bleed hero image of yacht silhouette at golden hour
- Minimal gold text: 'CRUISER × 伝統工芸' (Playfair Display)
- Japanese subtitle: '日本の美をまとう、海上の邸宅' (Shippori Mincho)
- Deep black background fading from image
- Thin gold accent line at bottom
- A4 size (210 x 297mm)
```

### ヒーロースプレッド用

```
Create a double-page spread:
- Full-bleed atmospheric yacht interior photography (80% of space)
- Minimal gold typography in bottom corner
- Generous 40mm margins
- Playfair Display for English headlines
- Shippori Mincho for Japanese text
- Reference: not a hotel minimal aesthetic
```

### 製品特集用

```
Design a 4-page yacht feature layout:
Page 1: Full exterior shot (bleed)
Pages 2-3: Interior spread with floating specs card
  - White card with 1px gold border
  - Model: Lexus LY680
  - Length: 68ft (20.7m)
  - Price: $5M+
  - Cabins: 3
Page 4: 6-image detail grid (square crops)
Style: not a hotel, extreme white space, gold accents
```

### カタロググリッド用

```
Create a catalog grid for traditional crafts:
- 3 columns × 5 rows layout
- Each item: Square image (top) + craft name in gold + 1-line description
- Items: 金沢箔, 蒔絵, 螺鈿, 組子, 和紙, 西陣織, 輪島塗, 松本民芸,
  江戸切子, 薩摩切子, 有田焼, 九谷焼, 高岡銅器, 七宝焼, 琉球畳
- Generous spacing (32px between items)
- Background: #1a1a1a
- Text: Gold (#C9A962) for names, warm gray for descriptions
```

### コンポーネント用

```
Design a specs card component:
- Floating white card with 1px gold (#C9A962) border
- Drop shadow: 0 4px 20px rgba(0,0,0,0.1)
- Padding: 24px
- Content:
  - Model name: Playfair Display, 24pt, black
  - Specs list: Inter Light, 14pt, gray
  - Price: Inter, 16pt, gold
- Rounded corners: 4px
```

---

## 📦 書き出し設定

### 印刷用
- フォーマット: PDF/X-4
- カラープロファイル: Japan Color 2001 Coated
- 解像度: 300dpi
- トンボ・裁ち落とし: 含む

### デジタル用
- フォーマット: PDF (インタラクティブ)
- カラープロファイル: sRGB
- 解像度: 150dpi

### Web用
- フォーマット: PNG / WebP
- 解像度: 2x (Retina対応)

---

## ✅ チェックリスト

- [ ] デザインシステム構築完了
- [ ] 全画像生成完了（Midjourney/NanoBanana）
- [ ] 表紙デザイン
- [ ] イントロスプレッド
- [ ] Lexus LY680 特集（4P）
- [ ] Lexus LY650 特集（4P）
- [ ] Yamaha EXULT 43 特集（4P）
- [ ] Yamaha PRESTIGE F4.9（2P）
- [ ] Toyota Ponam（2P）
- [ ] 工芸カタログ（4P）
- [ ] コンセプトショーケース（2P）
- [ ] 職人ストーリー（2P）
- [ ] プロセス・スペック（2P）
- [ ] 裏表紙
- [ ] 校正・確認
- [ ] 書き出し

---

## 📎 関連ファイル

- `figma_catalog_prompts.json` - Figma AI用JSON構造化プロンプト
- `prompts_image_generation.md` - 画像生成プロンプト集
- `index.html` - Webサイト（デザインリファレンス）
