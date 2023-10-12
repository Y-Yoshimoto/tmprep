about:blankimport { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 環境変数取り出し
  const env = loadEnv(mode, process.cwd(), '')
  const ROUTER_BASENAME = env.VITE_ROUTER_BASENAME || "/";
  // 設定を返す
  return {
    // ベースパスを指定
    base: ROUTER_BASENAME,
    // ソースコードのルートディレクトリを指定
    resolve: { alias: { '@': '/src' } },
    // プライグイン設定
    plugins: [
      react(),  //reactを使うためのプラグイン
      VitePWA({ //PWAを使うためのプラグイン(https://vite-pwa-org.netlify.app/guide/)
        registerType: 'autoUpdate',
        devOptions: { enabled: true },
        //サービスワーカの設定
        ...serviceworker(),
        // manifest.jsonの設定
        manifest: manifest(),
        //injectRegister: 'script'
      })],
    // サーバー起動設定
    server: {
      host: "0.0.0.0",
      port: 3000,
      // リバースプロキシの設定
      proxy: reverseproxy()
    }
  }
});

// マニフェスト設定
function manifest() {
  return ({
    "id": "ReactPortalSample",
    "name": "React Portal",
    "short_name": "rPortal",
    "description": "Reactポータルサンプル",
    "lang": "ja",
    "icons": [
      {
        "src": "favicon.ico",
        "sizes": "256x256",
        "type": "image/x-icon"
      },
      {
        "src": "icon.png",
        "type": "image/png",
        "sizes": "1024x1024"
      }
    ],
    "start_url": ".",
    "display": "standalone",
    "theme_color": "#000000",
    "background_color": "#ffffff"
  })
}
// リバースプロキシ設定
function reverseproxy() {
  return ({
    // https://ja.vitejs.dev/config/server-options.html
    '/api': {
      target: 'http://apiproxy_c:8080/api',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  })
}
// サービスワーカ設定
// https://vite-pwa-org.netlify.app/guide/inject-manifest.html
function serviceworker() {
  return {
    strategies: 'injectManifest',
    injectManifest: {
      injectionPoint: undefined
    },
    srcDir: 'src',
    filename: 'serviceworker_c.js',
  }
}
