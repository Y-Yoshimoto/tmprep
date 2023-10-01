/** 
 * 認証済みの時に表示するページのルーティング
 */
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

// モックコンポーネント
import { MockPlainPage } from '@/Mock';

// メインページ
import { PortalMain } from '@/PortalMain';

/** 
 * 認証済みルーティングの設定関数
 * @function
 * @param {Object} props - React props
 * @returns {list} ルーティングリスト
 */
const AuthorizedRoutes = () => {
    return (
        [{
            path: '/portal',
            element: <PortalMain />
        },
        {
            path: '/portal/sub',
            element: <MockPlainPage path={"/portal/sub"} />
        },
        {
            path: '/*',
            element: <Navigate to={"/portal"} />
        }])
};

export default AuthorizedRoutes;