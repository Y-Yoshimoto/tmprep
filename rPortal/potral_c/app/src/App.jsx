/** 
* @desc ルーティングコンポーネントを呼び出す
*/
import { useState, useLayoutEffect, createContext } from 'react';

// ルーティングコンポーネント
import Routes from './routes';

// 認証コンポーネント
import { AuthLayer } from '@/Authentication';
import { AuthProvider } from '@/Authentication';

/** アプリケーションコンポーネント
 * アプリケーション全体の認証情報コンテキストを提供する
 * AuthProviderコンポーネントでステート配信
 * AuthLayerコンポーネントで[確認中/未認証/認証済み]それぞれのコンポーネントを呼び出す
 * @function
 * @param {Object} props - React props
 * @returns {Object} JSX
 * @desc 認証コンポーネントを呼び出す
 * 
*/
export default function App() {
  // 認証レイヤー/ルーティングコンポーネント呼び出し
  return (
    < AuthProvider >
      <AuthLayer>
        <Routes />
      </AuthLayer>
    </AuthProvider >
  );
}
