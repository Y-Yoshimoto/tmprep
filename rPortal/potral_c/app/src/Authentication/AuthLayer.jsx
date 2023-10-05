/** 
* @desc 認証レイヤーコンポーネント
*/
import { useLayoutEffect } from 'react';
import { useAuthState } from '@/Authentication/AuthProvider';

// ローディングページ読み込み
import { LoadingFullSurface } from '@/component/common/Loading/';

/** 認証レイヤーコンポーネント
* 認証状態管理レイヤー ログイン状態を確認中の場合、ローディングページを表示する
* @function
* @param {object} props - props
* @param {object} props.children - 子コンポーネント
* @returns {object} - Reactコンポーネント
*/
export const AuthLayer = ({ children }) => {
    // 認証状態ステート
    const { authState, setAuthState } = useAuthState();
    console.debug(`Authentication State: ${authState}`);

    // 1秒後に認証状態を変更する(ログイン状態確認ダミー実装)
    useLayoutEffect(() => {
        console.debug(`Authentication Check...`);
        setTimeout(() => setAuthState(false), 1000);
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