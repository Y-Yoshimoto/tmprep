/** 
 * 認証済みの時に表示するページのルーティング
 */
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

// モックコンポーネント読み込み
import { MockPlainPage } from '@/mock';

// メインページ
import { MainLayout } from '@/pages/MainLayout';
// メインコンポーネント読み込み
import { Dashboard, Experience, Input, Recipe } from '@/pages/MainContent';

// 認証コンポーネント
//// 認証情報取得
import { authStateContext } from '@/lib/authentication/AuthProvider';

// ログアウト処理ページ
import { SignOutPage } from '@/pages/Authentication/SignOut/SignOut';

/** 
 * 認証済みルーティングの設定関数
 * @function
 * @param {Object} props - React props
 * @returns {list} ルーティングリスト
 */
const AuthorizedRoutes = () => {
    // 認証状態取得
    const { authState, clearAuthInfo } = authStateContext();

    return (
        [{
            path: '/portal',
            element: <MainLayout />,
            children: [
                { id: "Dashboard", path: 'dashboard', element: <Dashboard /> },
                { id: "Input", path: 'input', element: <Input /> },
                { id: "Recipe", path: 'recipe', element: <Recipe /> },
                { id: "Experience", path: 'experience', element: <Experience /> },
            ]
        },
        {
            path: '/signout',
            element: <SignOutPage authState={authState} clearAuthInfo={clearAuthInfo} />
        },
        {
            path: '/*',
            element: <Navigate to={"/portal/dashboard"} />
        }])
};

export default AuthorizedRoutes;