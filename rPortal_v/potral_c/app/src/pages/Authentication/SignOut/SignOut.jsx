// ログアウト処理ページ
import { useEffect } from 'react';

// サインインページサンプル
export const SignOutPage = ({ authState, clearAuthInfo }) => {
    console.debug("SignOutPage");
    console.debug(authState);
    // ログアウト処理
    useEffect(() => {
        clearAuthInfo();
    }, []);

    return (
        <>
            {"SignOutPage"}
        </>
    )
};
export default SignOutPage;