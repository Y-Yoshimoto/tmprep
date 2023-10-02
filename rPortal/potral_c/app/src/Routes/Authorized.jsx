/** 
 * 認証済みの時に表示するページのルーティング
 */
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

// モックコンポーネント
import { MockPlainPage } from '@/Mock';

// メインページ
import { PortalMain } from '@/PortalMain';

// 認証コンポーネント
//// 認証情報取得
import { useAuthState } from '@/Authentication/AuthProvider';

/** 
 * 認証済みルーティングの設定関数
 * @function
 * @param {Object} props - React props
 * @returns {list} ルーティングリスト
 */
const AuthorizedRoutes = () => {
    // 認証状態取得
    const { authState, setAuthState } = useAuthState();

    return (
        [{
            path: '/portal',
            element: <PortalMain setAuthState={setAuthState} />
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