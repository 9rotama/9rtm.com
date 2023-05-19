# 9rtm.com

プロフィール、制作物などを載せたポートフォリオサイト

## 使ったもの

### フレームワーク・言語
Next.js 12, Typescript
### ライブラリ
- スタイリング: Emotion
- 背景: React Three Fiber
### デプロイ 
Vercel
### コンテンツ管理
microCMS
### フォント
- M PLUS 1
- Dosis
- Inter

## 開発

### 環境変数
ルートディレクトリに`/env.local`を作成し`/env.example`に従って環境変数を記述する
(ドメイン、APIキーが必要なためmicroCMSにログインする)

### 開発サーバの起動
1.
```
cd 9rtm.com
npm i
npm run dev
```
2. `localhost:3000`にアクセス

### storybookの起動
1.
```
npm run storybook
```
2. `localhost:6006`にアクセス
