/** 
* @desc 認証レイヤーコンポーネント
*/
import { useEffect } from 'react';
import { authStateContext } from '@/lib/authentication/AuthProvider';

// ローディングページ読み込み
import { LoadingFullSurface } from '@/component/common/Loading/';

/** 認証レイヤーコンポーネント
* 認証状態確認中はローディングページを表示する
* @function
* @param {object} props - props
* @param {object} props.children - 子コンポーネント
* @returns {object} 認証レイヤーコンポーネント
*/
export const AuthLoadingLayer = ({ children }) => {
    // 認証状態ステート
    const { authState, clearAuthInfo, setAuthInfo } = authStateContext();
    console.debug(`Authentication State: ${authState}`);

    // 1秒後に認証状態を変更する(ログイン状態確認ダミー実装)
    useEffect(() => {
        console.debug(`CHECK`);
        console.debug(`Authentication Check...`);
        // ローカルすトレージから認証情報読み込み
        const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
        console.debug(`Refresh Token: ${refreshToken}`);
        if (refreshToken) {
            const info = { arg_accessToken: "token", arg_refreshToken: refreshToken, arg_userInfo: { userId: "hoge", email: "hoge" } }
            //setTimeout(() => setAuthInfo(info), 100);
            setAuthInfo(info);
        } else {
            setTimeout(() => clearAuthInfo(), 500);
        }
    }, []);

    // 認証状態を確認
    if (authState === undefined) {
        // 認証状態確認中の場合、ローディングページを表示
        return <LoadingFullSurface />
    } else {
        // 認証状態確認済みの場合、子コンポーネントを表示
        return <>{children}</>
    }
};