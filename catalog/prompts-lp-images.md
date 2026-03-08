# KOGEI CODE LP — NanoBanana Pro 画像生成プロンプト集

> **対象:** LP（`lp/src/`）のプレースホルダー画像 15枚
> **生成ツール:** NanoBanana Pro（Gemini 3 Pro Image）
> **プロンプト方針:** 自然な英語文で記述。5パート構造（Style → Subject → Camera → Lighting → Quality）

---

## 画像の保存先

```
/Users/oshiroyoshiki/Claude Code/research/02_富裕層向け動画/lp/public/images/inbox/
```

Finder で開く方法:
1. Finder → 「移動」→「フォルダへ移動」
2. 上記パスを貼り付けてEnter

**生成した画像は名前を気にせず、生成順に inbox フォルダへ保存してください。**
リネームは私がスクリプトで自動処理します。

---

## 共通設定（NanoBanana Pro）

| 項目 | 推奨値 |
|------|--------|
| Style Guidance | **8.0**（プロンプト忠実度を高く保つ） |
| Quality | **90** |
| Seed | **42**（バッチ内で統一し、トーンの一貫性を確保） |
| 解像度 | Hero → **4K** / その他 → **2K** |
| ネガティブプロンプト | `cartoon, anime, illustration, low quality, blurry, watermark, text overlay` |

### トーン統一ガイドライン

全画像で以下のトーンを統一する:

- **カラーパレット:** 暗めの背景（黒・ネイビー）× 暖かいゴールド/アンバーのアクセント光
- **ムード:** 高級感・静寂・上質な日本美
- **素材感:** 木目・金箔・漆・ガラス・ステンレスなど、触れたくなる質感を意識
- **人物:** 最小限。いる場合はシルエットまたは手元のみ（肖像権リスク回避）

---

## A. Hero 背景（1枚目）

### IMG-01: hero.jpg

| 項目 | 値 |
|------|-----|
| ファイル名 | `hero.jpg` |
| 配置先 | `Hero.tsx` — ヒーローセクション背景 |
| アスペクト比 | **16:9** |
| 解像度 | **4K** (4096×2304) |

**英語プロンプト:**

```
Cinematic aerial photograph of a Lexus LY680 luxury yacht cruising through Tokyo Bay at golden hour. The distinctive Lexus spindle grille bow design cutting through crystal blue water, Tokyo skyline in soft bokeh background. Shot from drone perspective at 45 degrees, 35mm wide angle, warm amber sunlight reflecting off the sleek hull. Professional marine photography, 4K editorial quality.
```

**日本語訳:**

> ゴールデンアワーの東京湾を航行するレクサス LY680 ラグジュアリーヨットのシネマティックな空撮写真。レクサス特有のスピンドルグリル型バウが透き通った青い海面を切り裂き、背景に東京のスカイラインがソフトボケで映る。ドローン視点で45度の角度から撮影、35mm広角、暖かいアンバーの日光が滑らかな船体に反射。プロフェッショナルなマリン写真、4Kエディトリアル品質。

---

## B. Concept 画像（2枚目）

### IMG-02: concept-kinpaku.jpg

| 項目 | 値 |
|------|-----|
| ファイル名 | `concept-kinpaku.jpg` |
| 配置先 | `Concept.tsx` — コンセプトセクション右側画像 |
| アスペクト比 | **4:5** |
| 解像度 | **2K** |

**英語プロンプト:**

```
Close-up macro photograph of traditional Kanazawa gold leaf (kinpaku) applied to a dark lacquered wall panel. Delicate gold texture catching warm ambient light, shallow depth of field. Japanese traditional craft detail, luxury interior design aesthetic. Shot with 100mm macro lens, soft studio lighting.
```

**日本語訳:**

> 黒い漆塗りの壁パネルに貼られた伝統的な金沢金箔のクローズアップマクロ写真。繊細な金の質感が暖かいアンビエント光を捉え、浅い被写界深度。日本の伝統工芸のディテール、ラグジュアリーなインテリアデザインの美学。100mmマクロレンズ、柔らかいスタジオ照明で撮影。

---

## C. Experience カード（3〜7枚目）

全カード共通: アスペクト比 **3:4** / 解像度 **2K**
配置先: `Experience.tsx` — 各カードの背景画像

### IMG-03: exp-sushi.jpg（3枚目）

**英語プロンプト:**

```
A master sushi chef preparing fresh nigiri on the teak deck of a luxury yacht at sunset. Warm golden light, ocean in background, premium ingredients on a hinoki wood counter. Documentary style, natural lighting, 50mm lens.
```

**日本語訳:**

> 夕暮れのラグジュアリーヨットのチーク材デッキで、寿司職人が新鮮なにぎりを握っている場面。暖かいゴールデンライト、背景に海、檜のカウンターに並ぶ高級食材。ドキュメンタリースタイル、自然光、50mmレンズ。

---

### IMG-04: exp-wagyu.jpg（4枚目）

**英語プロンプト:**

```
Premium A5 wagyu beef grilling on a designer BBQ station aboard a luxury yacht deck. Smoke rising, ocean horizon behind, evening amber light. Food photography style, shallow depth of field, 85mm lens.
```

**日本語訳:**

> ラグジュアリーヨットのデッキに設置されたデザイナーBBQステーションで焼かれる最高級A5和牛。立ち上る煙、背後に海の水平線、夕暮れのアンバー光。フード写真スタイル、浅い被写界深度、85mmレンズ。

---

### IMG-05: exp-hanabi.jpg（5枚目）

**英語プロンプト:**

```
Spectacular fireworks display over Tokyo Bay viewed from the deck of a luxury yacht at night. Colorful reflections on dark water, silhouettes of guests with champagne glasses. Wide angle 24mm, long exposure effect.
```

**日本語訳:**

> 夜のラグジュアリーヨットのデッキから眺める東京湾の壮大な花火。暗い海面に映るカラフルな反射、シャンパングラスを持つゲストのシルエット。24mm広角、長時間露光エフェクト。

---

### IMG-06: exp-craft-dinner.jpg（6枚目）

**英語プロンプト:**

```
Elegant dinner table set with traditional Japanese craft tableware — Wajima lacquerware bowls, Satsuma Kiriko crystal glasses — inside a luxury yacht salon. Warm candlelight atmosphere, 35mm medium shot.
```

**日本語訳:**

> ラグジュアリーヨットのサロン内に設えられたエレガントなディナーテーブル。輪島塗の椀、薩摩切子のクリスタルグラスなど日本の伝統工芸の食器が並ぶ。暖かいキャンドルライトの雰囲気、35mmミディアムショット。

---

### IMG-07: exp-chef.jpg（7枚目）

**英語プロンプト:**

```
A Michelin-starred chef plating a course in the galley of a luxury yacht. Steam rising, precision knife work, dramatic side lighting. Professional kitchen photography, 85mm portrait lens, warm tones.
```

**日本語訳:**

> ラグジュアリーヨットのギャレー（厨房）でコース料理を盛り付けるミシュランシェフ。立ち上る湯気、精密な包丁さばき、ドラマチックなサイドライト。プロフェッショナルなキッチン写真、85mmポートレートレンズ、暖色系。

---

## D. Fleet カード（8〜9枚目）

全カード共通: アスペクト比 **16:9** / 解像度 **2K**
配置先: `Fleet.tsx` — 各船カードの画像エリア

### IMG-08: fleet-exult43.jpg（8枚目）

**英語プロンプト:**

```
Yamaha EXULT 43 luxury cruiser moored at a premium Japanese marina at blue hour. Sleek white hull with elegant lines, marina lights reflecting on calm water. Maritime editorial photography, 35mm lens, cool blue ambient light with warm interior glow.
```

**日本語訳:**

> ブルーアワーの高級日本マリーナに係留されたヤマハ EXULT 43 ラグジュアリークルーザー。優美なラインを持つ白い船体、穏やかな水面に映るマリーナの灯り。マリンエディトリアル写真、35mmレンズ、クールブルーのアンビエント光と暖かい船内の明かり。

---

### IMG-09: fleet-ly680.jpg（9枚目）

**英語プロンプト:**

```
Lexus LY680 luxury yacht cruising through calm Japanese waters with mountainous coastline in background. Distinctive Lexus spindle grille bow design, flybridge visible. Cinematic maritime photography, drone aerial shot at 45 degrees, golden hour light.
```

**日本語訳:**

> 穏やかな日本の海を航行するレクサス LY680 ラグジュアリーヨット。背景に山がちな海岸線。レクサス特有のスピンドルグリル型バウデザイン、フライブリッジが見える。シネマティックなマリン写真、ドローンで45度の角度から空撮、ゴールデンアワーの光。

---

## E. Craft グリッド（10〜15枚目）

全カード共通: アスペクト比 **1:1** / 解像度 **2K** (2048×2048)
配置先: `Craft.tsx` — 各工芸カードの背景画像

### IMG-10: craft-kinpaku.jpg（10枚目）

**英語プロンプト:**

```
Artisan hands carefully applying thin sheets of Kanazawa gold leaf onto a dark panel surface. Warm studio lighting, extreme close-up detail of the gold foil texture. Traditional Japanese craft documentary, 100mm macro.
```

**日本語訳:**

> 黒いパネルの表面に金沢金箔の薄いシートを丁寧に貼る職人の手元。暖かいスタジオ照明、金箔の質感の極めて精細なクローズアップ。日本の伝統工芸ドキュメンタリー、100mmマクロ。

---

### IMG-11: craft-wajima.jpg（11枚目）

**英語プロンプト:**

```
Wajima-nuri lacquerware bowl in deep vermillion red, sitting on dark cloth. Multiple layers of urushi lacquer visible in cross-light. Product photography, 90mm macro, soft directional light.
```

**日本語訳:**

> 黒い布の上に置かれた深い朱色の輪島塗の椀。クロスライトで何層にも重ねられた漆が見える。プロダクト写真、90mmマクロ、柔らかい方向性のある光。

---

### IMG-12: craft-kumiko.jpg（12枚目）

**英語プロンプト:**

```
Intricate Kanuma kumiko woodwork lattice pattern, geometric precision of assembled wooden pieces without nails. Warm side lighting emphasizing depth and shadow of the geometric patterns. Architectural detail photograph, 50mm.
```

**日本語訳:**

> 精緻な鹿沼組子の格子模様。釘を使わずに組み上げられた木片の幾何学的な精密さ。暖かいサイドライトが幾何学模様の奥行きと影を強調。建築ディテール写真、50mm。

---

### IMG-13: craft-kiriko.jpg（13枚目）

**英語プロンプト:**

```
Satsuma Kiriko cut glass in deep cobalt blue with geometric facets catching prismatic light. Crystal clear reflections on dark surface. Luxury product photography, 85mm, studio backlight.
```

**日本語訳:**

> 深いコバルトブルーの薩摩切子。幾何学的なカット面がプリズム光を捉えている。暗い面の上でクリスタルのような透明な反射。ラグジュアリープロダクト写真、85mm、スタジオバックライト。

---

### IMG-14: craft-hakata.jpg（14枚目）

**英語プロンプト:**

```
Hakata-ori textile weaving in progress on a traditional loom. Rich silk threads in gold and indigo patterns. Close-up showing the weave structure. Documentary craft photography, natural window light, 50mm.
```

**日本語訳:**

> 伝統的な織機で進行中の博多織。金と藍の模様の豊かな絹糸。織りの構造を見せるクローズアップ。ドキュメンタリー工芸写真、自然な窓明かり、50mm。

---

### IMG-15: craft-tsubame.jpg（15枚目）

**英語プロンプト:**

```
Tsubame-Sanjo hand-forged stainless steel cutlery set arranged on dark slate. Mirror-polished surfaces reflecting ambient light. Minimal product photography, overhead shot, soft diffused light.
```

**日本語訳:**

> ダークスレートの上に並べられた燕三条の手打ちステンレスカトラリーセット。鏡面仕上げの表面がアンビエント光を反射。ミニマルなプロダクト写真、真上からのショット、柔らかい拡散光。

---

## 生成チェックリスト

| # | ファイル名 | 内容 | 比率 | 解像度 | 生成済み |
|---|-----------|------|------|--------|---------|
| 01 | hero.jpg | Lexus LY680 東京湾空撮 | 16:9 | 4K | ☐ |
| 02 | concept-kinpaku.jpg | 金箔クローズアップ | 4:5 | 2K | ☐ |
| 03 | exp-sushi.jpg | 船上寿司 | 3:4 | 2K | ☐ |
| 04 | exp-wagyu.jpg | 和牛BBQ | 3:4 | 2K | ☐ |
| 05 | exp-hanabi.jpg | 花火クルーズ | 3:4 | 2K | ☐ |
| 06 | exp-craft-dinner.jpg | 工芸ディナー | 3:4 | 2K | ☐ |
| 07 | exp-chef.jpg | シェフクルーズ | 3:4 | 2K | ☐ |
| 08 | fleet-exult43.jpg | EXULT 43 マリーナ係留 | 16:9 | 2K | ☐ |
| 09 | fleet-ly680.jpg | LY680 航行 | 16:9 | 2K | ☐ |
| 10 | craft-kinpaku.jpg | 金沢金箔 職人 | 1:1 | 2K | ☐ |
| 11 | craft-wajima.jpg | 輪島塗 | 1:1 | 2K | ☐ |
| 12 | craft-kumiko.jpg | 鹿沼組子 | 1:1 | 2K | ☐ |
| 13 | craft-kiriko.jpg | 薩摩切子 | 1:1 | 2K | ☐ |
| 14 | craft-hakata.jpg | 博多織 | 1:1 | 2K | ☐ |
| 15 | craft-tsubame.jpg | 燕三条カトラリー | 1:1 | 2K | ☐ |

---

## 操作手順

1. https://aistudio.google.com にアクセス（Google アカウントでログイン）
2. モデルを **Gemini 2.0 Flash** (image generation対応) または **Nano Banana Pro** を選択
3. 上記の**英語プロンプト**をコピー&ペースト
4. アスペクト比を画像ごとに設定（16:9 / 4:5 / 3:4 / 1:1）
5. 生成後、画像を右クリック →「名前を付けて保存」
6. 下記フォルダに保存（名前は何でもOK、生成順に保存）:

```
/Users/oshiroyoshiki/Claude Code/research/02_富裕層向け動画/lp/public/images/inbox/
```

7. 保存が終わったら教えてください。リネーム＆LP反映は自動で行います。
