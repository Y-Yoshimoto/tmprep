/** 
 * 認証前に表示するページのルーティング
 */
import { Navigate } from 'react-router-dom';

// モックコンポーネント
import { MockPlainPage } from '@/mock';
//const MockPlainPage = lazy(() => import('../mock/Pages.jsx'));

// ログイン画面
import { SignInPage } from '@/pages/Authentication/SignIn/';
// 認証コンポーネント
// 認証情報取得
import { authStateContext } from '@/lib/Authentication/AuthProvider';

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