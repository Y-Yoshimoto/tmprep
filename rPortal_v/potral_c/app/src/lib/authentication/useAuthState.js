/** 
* 認証状態カスタムフック
*/
// モジュールのインポート
import { useState, useRef } from 'react';
import { useSessionStorage, useLocalStorage } from 'react-use';
/**
 * 認証状態カスタムフック
 * @returns [authState, accessToken, refreshToken, userInfo, setAuthInfo]
*/
const useAuthState = (initState = undefined) => {
    // 認証状態ステート
    const [authState, setAuthState] = useState(initState);
    // ユーザー情報(ユーザーID, メールアドレス)
    // セッションストレージ同期フック
    const [userInfo, setUserInfo] = useSessionStorage('userId', { userId: undefined, email: undefined });

    // アクセストークン, リフレッシュトークン
    const accessToken = useRef(undefined);
    const [refreshToken, setRefreshToken, removeRefreshToken] = useLocalStorage('refreshToken', undefined);

    // 認証情報をセット
    const setAuthInfo = ({ arg_accessToken, arg_refreshToken, arg_userInfo }) => {
        console.info('Set authentication.');
        // 情報セット
        accessToken.current = arg_accessToken;
        setUserInfo(arg_userInfo);
        setRefreshToken(arg_refreshToken);
        // 認証状態変更
        setAuthState(true);
    };

    // 認証情報をクリア
    const clearAuthInfo = () => {
        console.info('Clear authentication.');
        // 情報クリア
        accessToken.current = undefined;
        removeRefreshToken();
        setUserInfo({ userId: undefined, email: undefined });
        // 認証状態変更
        setAuthState(false);
    };

    // 認証情報を更新する
    const updateAuthInfo = (arg_accessToken) => {
        console.info('Update token.');
        accessToken.current = arg_accessToken;
    };

    return { authState, accessToken, refreshToken, userInfo, setAuthInfo, clearAuthInfo, updateAuthInfo };
}

export default useAuthState;
