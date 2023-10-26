// ログアウト処理ページ
import { useEffect } from 'react';
//console.log("Import SignOutPage");

// サインインページサンプル
export const SignOutPage = ({ authState, clearAuthInfo }) => {
    // ログアウト処理
    useEffect(() => {
        clearAuthInfo();
    }, []);

    return (
        <>
        </>
    )
};
export default SignOutPage;