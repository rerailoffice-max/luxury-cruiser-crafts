#!/bin/bash
# ============================================================
# KOGEI CODE LP — 画像リネームスクリプト
# ============================================================
#
# 使い方:
#   1. NanoBanana Pro で画像を生成
#   2. 生成順に lp/public/images/inbox/ に保存（名前は何でもOK）
#   3. このスクリプトを実行:  bash rename-images.sh
#
# 生成順序（この順番で inbox に保存してください）:
#   1枚目  → hero（ヒーロー背景: Lexus LY680 東京湾空撮）
#   2枚目  → concept-kinpaku（金箔クローズアップ）
#   3枚目  → exp-sushi（船上寿司）
#   4枚目  → exp-wagyu（和牛BBQ）
#   5枚目  → exp-hanabi（花火クルーズ）
#   6枚目  → exp-craft-dinner（工芸ディナー）
#   7枚目  → exp-chef（シェフクルーズ）
#   8枚目  → fleet-exult43（EXULT 43 外観）
#   9枚目  → fleet-ly680（LY680 外観）
#   10枚目 → craft-kinpaku（金沢金箔 職人）
#   11枚目 → craft-wajima（輪島塗）
#   12枚目 → craft-kumiko（鹿沼組子）
#   13枚目 → craft-kiriko（薩摩切子）
#   14枚目 → craft-hakata（博多織）
#   15枚目 → craft-tsubame（燕三条カトラリー）
# ============================================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
INBOX="$SCRIPT_DIR/public/images/inbox"
DEST="$SCRIPT_DIR/public/images"

NAMES=(
  "hero"
  "concept-kinpaku"
  "exp-sushi"
  "exp-wagyu"
  "exp-hanabi"
  "exp-craft-dinner"
  "exp-chef"
  "fleet-exult43"
  "fleet-ly680"
  "craft-kinpaku"
  "craft-wajima"
  "craft-kumiko"
  "craft-kiriko"
  "craft-hakata"
  "craft-tsubame"
)

# inbox 内のファイルを作成日時順に取得
FILES=($(ls -t -r "$INBOX"/*.{jpg,jpeg,png,webp} 2>/dev/null))

if [ ${#FILES[@]} -eq 0 ]; then
  echo "inbox フォルダに画像がありません。"
  echo "保存先: $INBOX"
  exit 1
fi

echo "=== KOGEI CODE LP 画像リネーム ==="
echo "inbox 内の画像: ${#FILES[@]}枚"
echo ""

COUNT=0
for FILE in "${FILES[@]}"; do
  if [ $COUNT -ge ${#NAMES[@]} ]; then
    echo "⚠ 15枚を超える画像はスキップ: $(basename "$FILE")"
    continue
  fi

  EXT="${FILE##*.}"
  TARGET_NAME="${NAMES[$COUNT]}.jpg"
  SRC_NAME="$(basename "$FILE")"

  # png/webp の場合も .jpg として配置（Next.js で統一）
  cp "$FILE" "$DEST/$TARGET_NAME"
  echo "✓ [$((COUNT+1))/15] $SRC_NAME → $TARGET_NAME"
  COUNT=$((COUNT+1))
done

echo ""
echo "=== 完了: ${COUNT}枚をリネーム・配置しました ==="
echo ""

if [ $COUNT -lt 15 ]; then
  echo "⚠ 残り $((15 - COUNT))枚が未配置です。"
  echo "  不足分:"
  for i in $(seq $COUNT $((${#NAMES[@]}-1))); do
    echo "    - ${NAMES[$i]}.jpg"
  done
fi
