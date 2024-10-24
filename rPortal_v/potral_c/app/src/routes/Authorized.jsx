/** 
 * 認証済みの時に表示するページのルーティング
 */
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';


// メインページ
const MainLayout = lazy(() => import('@/pages/MainLayout'));

// メインコンポーネント読み込み
import { Dashboard, Experience, Input, Recipe, IngredientsEstimated } from '@/pages/MainContent';

// 認証コンポーネント
//// 認証情報取得
import { authStateContext } from '@/lib/authentication/AuthProvider';

// ログアウト処理ページ
import SignOutPage from '@/pages/Authentication/SignOut/SignOut';
//const SignOutPage = lazy(() => import('@/pages/Authentication/SignOut/SignOut'));

/** 
 * 認証済みルーティングの設定関数
 * @function
 * @param {Object} props - React props
 * @returns {list} ルーティングリスト
 */
const AuthorizedRoutes = () => {
    // 認証状態取得
    const { authState, clearAuthInfo } = authStateContext();

    console.debug("AuthorizedRoutes");

    return (
        [{
            path: '/',
            element: <MainLayout />,
            children: [
                { id: "Dashboard", path: 'dashboard', element: <Dashboard /> },
                { id: "Input", path: 'input', element: <Input /> },
                { id: "Recipe", path: 'recipe', element: <Recipe /> },
                { id: "Experience", path: 'experience', element: <Experience /> },
                { id: "IngredientsEstimated", path: 'ingredients', element: <IngredientsEstimated /> },
            ]
        },
        {
            path: '/signout',
            element: <SignOutPage authState={authState} clearAuthInfo={clearAuthInfo} />
        },
        {
            path: '/*',
            element: <Navigate to={"/dashboard"} />
        }])
};

export default AuthorizedRoutes;