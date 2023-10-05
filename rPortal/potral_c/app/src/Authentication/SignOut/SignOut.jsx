// ログアウト処理ページ
import { useEffect } from 'react';

// サインインページサンプル
export function SignOutPage({ authState, setAuthState }) {
    console.debug("SignOutPage");
    console.debug(authState);
    // ログアウト処理
    useEffect(() => {
        setAuthState(false);
    }, [setAuthState]);

    return (
        <>
            {"SignOutPage"}
        </>
    )
}