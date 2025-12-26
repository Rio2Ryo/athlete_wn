# Athlete Website - 長原和那選手向けMother Vegetableサイト

## プロジェクト概要

このプロジェクトは、mothervegetable.comのデザインを完全に再現し、バドミントン日本代表選手の長原和那選手向けにカスタマイズしたアスリート向けウェブサイトです。

## 主な機能

### デザイン
- mothervegetable.comの完全再現（黒背景、緑のアクセント、点線ボーダー）
- レスポンシブデザイン対応
- 動画を含む製品カード表示

### コンテンツ
- 長原和那選手のヒーローセクション
- アスリート向け製品説明（Achieve, Confidence）
- アスリートプロフィール
- お客様の声（Testimonial）
- 48種類の栄養素詳細
- アスリート向け効果説明

## 技術スタック

- **フレームワーク**: Next.js 16.1.0
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: Vercel
- **バージョン管理**: GitHub

## セットアップ

### 必要な環境
- Node.js 18以上
- pnpm

### インストール

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# 本番サーバーの起動
pnpm start
```

開発サーバーを起動後、ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスしてください。

## デプロイ

### GitHub
リポジトリ: https://github.com/Rio2Ryo/athlete_wn

### Vercel
本番URL: https://athlete-wn.vercel.app/

GitHubにプッシュすると自動的にVercelにデプロイされます。

## プロジェクト構造

```
athlete_wn/
├── public/
│   ├── Images/
│   │   └── Assets/
│   │       ├── General/          # ロゴなど
│   │       └── homepage/         # ホームページ用画像
│   ├── nagahara_rakket.jpg      # 長原選手の写真
│   └── ...
├── src/
│   └── app/
│       ├── layout.tsx           # レイアウト
│       ├── page.tsx             # メインページ
│       └── globals.css          # グローバルスタイル
├── COMPLETION_REPORT.md         # 完成レポート
├── DESIGN_NOTES.md              # デザイン分析メモ
└── README.md                    # このファイル
```

## 動画の取り扱い

動画ファイルはCDN URLから直接読み込んでいます。これによりリポジトリサイズを小さく保ちながら、高品質な動画を表示できます。

## カスタマイズポイント

### 長原選手向けのカスタマイズ
1. ヒーローセクションに長原選手の写真と紹介
2. 製品説明をアスリート向けに変更
3. アスリートプロフィールセクションの追加
4. お客様の声に長原選手のコメントを追加
5. アスリート向け効果セクションの追加

## ライセンス

© 2024 Mother Vegetable. All rights reserved.

## 連絡先

Athlete: 長原和那 (Nagahara Wakana)
