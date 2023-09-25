/** 
* @desc ルーティングコンポーネントを呼び出す
*/
import { useState, useLayoutEffect, createContext } from 'react';

// ルーティングコンポーネント
import Routes from './Routes';

// 認証コンポーネント
import { AuthLayer } from 'Authentication';
import { AuthProvider } from 'Authentication';

/** アプリケーションコンポーネント
 * アプリケーション全体での認証情報を管理する
*/
export default function App() {
  // 認証レイヤー/ルーティングコンポーネント呼び出し
  return (
    <AuthProvider>
      <AuthLayer>
        <Routes />
      </AuthLayer>
    </AuthProvider>
  );
}
