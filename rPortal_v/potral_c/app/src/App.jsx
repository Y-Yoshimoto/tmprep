/** 
* @desc ルーティングコンポーネントを呼び出す
*/
import { lazy, Suspense } from 'react';
import { useState, useLayoutEffect, createContext } from 'react';

// ルーティングコンポーネント
import Routes from './routes';

// 認証コンテキストプロバイダー
import { AuthProvider } from '@/lib/authentication';
// 読み込み待ち
const Fallback = () => <div>Loading...</div>;
// エラー画面
import { ErrorBoundary } from '@/component/common/ErrorBoundry';

/** アプリケーションコンポーネント
 * 各レイヤーを呼び出す
 * AuthProvider: アプリケーション全体の認証情報コンテキストを提供する
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
      <Routes />
    </AuthProvider >
  );
};

//// エラー処理
//<Suspense fallback={<Fallback />}>
//  <ErrorBoundary>
//    {children}
//  </ErrorBoundary >
//  </Suspense >