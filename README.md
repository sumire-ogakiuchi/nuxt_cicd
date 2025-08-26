# CI/CDの基本実装

## 実装状況

Pull Request 作成👇

GitHub Actions で lint（ESLint）チェック が自動実行

問題なければレビュー & マージ可能

--------------------------------------

main ブランチにマージ👇

GitHub Actions で lint + ビルド + gh-pages へのデプロイ が自動実行

最新の静的サイトが自動的に GitHub Pages で公開
 https://sumire-ogakiuchi.github.io/nuxt_cicd/

--------------------------------------

ワークフロー👇
.github/workflows/deploy.yml

eslint設定👇
eslint.config.mjs
