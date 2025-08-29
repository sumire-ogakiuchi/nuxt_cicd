# CI/CDの基本実装

## 実装状況
push, Pull Request 作成👇

lint（ESLint）チェック、テストコード（vitest） が自動実行

問題なければマージ可能

--------------------------------------

mainブランチにマージ👇

Lint + ビルド + gh-pages へのデプロイ が自動実行

最新の静的サイトが自動的に GitHub Pages で公開
 https://sumire-ogakiuchi.github.io/nuxt_cicd/

--------------------------------------

ワークフロー👇
.github/workflows/deploy.yml
