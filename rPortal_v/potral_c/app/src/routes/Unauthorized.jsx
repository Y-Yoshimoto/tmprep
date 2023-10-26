/** 
 * 認証前に表示するページのルーティング
 */
import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

// モックコンポーネント
import { MockPlainPage } from '@/mock';

// ログイン画面
const SignInPage = lazy(() => import('@/pages/Authentication/SignIn/SignInPage'));

// 認証コンポーネント
// 認証情報取得
import { authStateContext } from '@/lib/authentication/AuthProvider';

/** 
* 未認証ルーティングの設定関数
* @function
* @param {Object} props - React props
* @returns {list} ルーティングリスト
*/
const UnauthorizedRoutes = () => {
    const { authState, setAuthInfo } = authStateContext();

    return (
        [{
            path: '/signin',
            element: <SignInPage authState={authState} setAuthInfo={setAuthInfo} />
        },
        {
            path: '/passwordreset',
            element: <MockPlainPage path={"/passwordreset"} />
        },
        {
            path: '/*',
            element: <Navigate to={"/signin"} />
        }
        ]);
};

export default UnauthorizedRoutes;