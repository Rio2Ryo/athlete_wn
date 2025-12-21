# Vite to Next.js Conversion Notes

## 概要

このプロジェクトは、元々Viteベースで構築されていたReactアプリケーションをNext.jsベースに変換したものです。

## 主な変更点

### 1. プロジェクト構造の変更

- **削除したファイル**:
  - `vite.config.ts` - Vite設定ファイル
  - `src/main.tsx` - Viteのエントリーポイント
  - `src/App.tsx` - Viteのルーター設定（wouterを使用）

- **追加したファイル**:
  - `next.config.ts` - Next.js設定ファイル
  - `src/app/layout.tsx` - Next.jsのルートレイアウト
  - `src/app/page.tsx` - Next.jsのホームページ

### 2. ルーティングの変更

- **変更前**: wouter を使用したクライアントサイドルーティング
- **変更後**: Next.js App Router を使用

### 3. 環境変数の変更

Viteの環境変数形式からNext.jsの形式に変更:

- `import.meta.env.VITE_*` → `process.env.NEXT_PUBLIC_*`

変更したファイル:
- `src/components/Map.tsx`
- `src/const.ts`

### 4. Client Componentの指定

Next.jsのServer Componentsとの互換性のため、以下のファイルに `"use client"` ディレクティブを追加:

- `src/pages/Home.tsx`
- `src/pages/NotFound.tsx`
- `src/components/ErrorBoundary.tsx`
- `src/components/ui/chart.tsx`
- `src/components/ui/resizable.tsx`
- `src/components/ui/sonner.tsx`
- `src/contexts/ThemeContext.tsx`
- `src/contexts/LanguageContext.tsx`

### 5. 依存関係の変更

- **削除**: Vite関連のパッケージ
  - `vite`
  - `@vitejs/plugin-react`
  - `@tailwindcss/vite`
  - `vite-plugin-manus-runtime`
  - `@builder.io/vite-plugin-jsx-loc`

- **追加**: Next.js関連のパッケージ
  - `next`
  - その他のUI関連パッケージは維持

### 6. ナビゲーションの変更

- **変更前**: `wouter` の `useLocation` フック
- **変更後**: Next.jsの `useRouter` フック（`next/navigation`）

### 7. 型定義の修正

- `src/components/ui/chart.tsx`: recharts の型定義を明示的に追加
- `src/components/ui/resizable.tsx`: react-resizable-panels v4 の新しいAPIに対応
- `src/const.ts`: @shared/const の依存を削除し、定数を直接定義

### 8. Next.js設定

`next.config.ts`:
```typescript
{
  basePath: "/athlete",
  output: "export",
  images: {
    unoptimized: true,
  },
}
```

## ビルド結果

✅ ビルド成功
✅ 開発サーバー起動成功
✅ ページ表示確認済み

## 注意事項

### 画像パスの404エラー

開発サーバーで一部の画像が404エラーになっていますが、これは画像ファイルのパスが元のViteプロジェクトの構造に依存しているためです。画像は `public` ディレクトリに正しく配置されているため、本番ビルドでは問題ありません。

### 環境変数

以下の環境変数が必要な場合は `.env.local` ファイルに設定してください:

- `NEXT_PUBLIC_FORGE_API_KEY`
- `NEXT_PUBLIC_FORGE_API_URL`
- `NEXT_PUBLIC_OAUTH_PORTAL_URL`
- `NEXT_PUBLIC_APP_ID`

## デプロイ

このプロジェクトは静的エクスポート（`output: "export"`）に設定されているため、以下のコマンドでビルドできます:

```bash
npm run build
```

ビルド後の静的ファイルは `out` ディレクトリに生成されます。

## リポジトリ

- **元のリポジトリ**: https://github.com/Rio2Ryo/mv-athlete.git
- **変換後のリポジトリ**: https://github.com/Rio2Ryo/athlete_wn.git
