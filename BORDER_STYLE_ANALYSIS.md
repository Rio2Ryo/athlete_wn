# mothervegetable.com 点線スタイル分析

## 重要な発見

スクリーンショットを詳細に分析した結果、mothervegetable.comの「点線」は実際には**点線（dashed）ではなく、細い実線（solid）**であることが判明しました。

## 現在の実装の問題点

### 1. ボーダースタイルの誤り

**現在の実装:**
- borderStyle: 'dashed'（点線）
- borderWidth: 2px ~ 4px

**正しいスタイル（mothervegetable.com）:**
- borderStyle: 'solid'（実線）
- borderWidth: 1px（非常に細い）

### 2. ヘッダーメニュー項目

**mothervegetable.comの実際のスタイル:**
```css
border: 1px solid rgb(255, 255, 255);
borderStyle: solid;
borderWidth: 1px;
borderColor: rgb(255, 255, 255); /* 白 */
borderRadius: 5px;
```

**現在の実装:**
```css
border: 2px dashed #22c55e; /* 緑の点線 */
```

**問題点:**
- dashedではなくsolidにすべき
- 太さが2pxではなく1pxにすべき
- 色が緑ではなく白にすべき（一部の要素）

### 3. 製品カード

**スクリーンショットから観察:**
- Achieveカード: 赤の細い点線（dashed）
- Confidenceカード: 緑の細い点線（dashed）
- Foreverカード: 実線（solid）

**現在の実装:**
```css
border: 4px dashed #22c55e; /* Achieve - 緑の点線 */
border: 4px dashed #ef4444; /* Confidence - 赤の点線 */
border: 4px dashed #22c55e; /* Forever - 緑の点線 */
```

**問題点:**
- 太さが4pxは太すぎる → 1px ~ 2pxにすべき
- 色の割り当てが逆（Achieveは緑、Confidenceは赤）

### 4. 製品セクション全体の枠

**スクリーンショットから観察:**
- 緑の細い実線（solid）で囲まれている

**現在の実装:**
```css
border: 4px dashed #22c55e;
```

**問題点:**
- 太さが4pxは太すぎる → 1px ~ 2pxにすべき

### 5. セクション区切りの水平線

**スクリーンショットから観察:**
- 緑の細い点線（dashed）

**現在の実装:**
```css
border-bottom: 2px dashed #22c55e;
```

**問題点:**
- 太さは適切だが、より細くする必要があるかもしれない

## 修正すべき点のまとめ

### 優先度1: ヘッダー

1. **ロゴの枠**: 緑の点線 → 緑の細い実線（1px solid）
2. **メニュー項目の枠**: 緑の点線 → 白または緑の細い実線（1px solid）
3. **カート・ユーザーアイコンの枠**: 緑の点線 → 緑の細い実線（1px solid）
4. **ヘッダー下部のボーダー**: 2px dashed → 1px dashed

### 優先度2: 製品セクション

1. **製品セクション全体の枠**: 4px dashed → 2px dashed または 1px solid
2. **Achieveカード**: 4px dashed 緑 → 2px dashed 赤
3. **Confidenceカード**: 4px dashed 赤 → 2px dashed 緑
4. **Foreverカード**: 4px dashed 緑 → 1px solid 緑

### 優先度3: その他のセクション

1. **日本語説明セクションの枠**: 4px dashed → 2px dashed
2. **Athlete Profileの写真枠**: 4px dashed → 2px dashed
3. **Testimonialカードの枠**: 4px dashed → 2px dashed
4. **すべてのセクション区切り**: 2px dashed → 1px dashed

## 結論

mothervegetable.comの「点線」は、実際には**非常に細い実線（1px solid）**と**細い点線（1-2px dashed）**の組み合わせです。

現在の実装では、すべてのボーダーが太すぎる（2px ~ 4px）ため、視覚的に重く見えています。

**修正方針:**
1. すべてのボーダーを1px ~ 2pxに変更
2. ヘッダー要素は主にsolid（実線）を使用
3. セクション区切りと一部のカードはdashed（点線）を使用
4. 色の割り当てを正しく修正
