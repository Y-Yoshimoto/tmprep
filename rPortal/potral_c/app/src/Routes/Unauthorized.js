/** 
 * 認証前に表示するページのルーティング
 */
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

// モックコンポーネント
import { MockPlainPage } from 'Mock';

// ログイン画面
import { SignInPage } from 'Authentication';

/** 
* 未認証ルーティングの設定関数
* @function
* @param {Object} props - React props
* @returns {list} ルーティングリスト
*/
const UnauthorizedRoutes = () => {
    return (
        [{
            path: '/signin',
            element: <SignInPage />
        },
        {
            path: '/passwordreset',
            element: <MockPlainPage path={"/passwordreset"} />
        },
            //{
            //    path: '/*',
            //    element: <Navigate to={"/signin"} />
            //}
        ]);
};

export default UnauthorizedRoutes;