import { defineConfig } from 'cypress'
//https://docs.cypress.io/guides/overview/why-cypress

export default defineConfig({
    e2e: {
        // アクセスURL
        baseUrl: 'http://nginxproxy_c/portal/',
        // ダウンロードファイルの保管場所
        downloadsFolder: './results/downloads',
        // テスト中にのスナップショット保管場所
        screenshotsFolder: './results/screenshots',
        // テスト実行記録動画の保管場所
        videosFolder: './results/videos',
        // テスト実行を動画で記録するか否か
        video: true,
        // 記録した動画の圧縮を行うか否か
        videoCompression: true,
        // テスト実行前のアセット削除を行うか否か
        trashAssetsBeforeRuns: true,
        // テスト対象のテストソースファイル
        specPattern: 'test-src/**/*.cy.js',
        // specファイルが読み込まれる前に実行されるファイル
        supportFile: false,
        // 日本語の表示設定
        "modifyObstructiveCode": false,
        // https://docs.cypress.io/guides/references/configuration#Viewport
        //// テスト実行時のブラウザの高さ
        viewportHeight: 800,
        //// テスト実行時のブラウザの幅
        viewportWidth: 1200,
    },
})