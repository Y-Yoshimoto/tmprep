/**
 * 認証情報コンテキストプロバイダーレイヤー
 * 認証情報をコンテキストに提供する
 * ローディングレイヤーを内包する
 */
import { useState, createContext, useContext } from 'react';
// 認証レイヤーコンポーネント
import { AuthLoadingLayer } from './AuthLoadingLayer';
// 認証情報フック
import useAuthState from './useAuthState.js';


// 認証コンテキスト
const AuthContext = createContext();
export const authStateContext = () => useContext(AuthContext);

// 認証情報プロバイダー
export const AuthProvider = ({ children }) => {
    // 認証状態ステート
    //const { authState, accessToken, refreshToken, userInfo, setAuthInfo, clearAuthInfo, updateAuthInfo } = useAuthState();
    // デバック: 初期状態を認証済み
    const { authState, accessToken, refreshToken, userInfo, setAuthInfo, clearAuthInfo, updateAuthInfo } = useAuthState(true);

    // 下層コンポーネントに認証情報を提供
    return (
        <AuthContext.Provider value={{ authState, setAuthInfo, clearAuthInfo, refreshToken, userInfo }}>
            {/* 認証確認中は認証確認コンポーネントを返す */}
            {authState === undefined ? <AuthLoadingLayer /> :
                // 認証確認済みの場合、トークン更新サイドカーコンポーネントを付随して子コンポーネントを返す
                authState ?
                    <>
                        <UpdateToken />
                        {children}
                    </>
                    : <>{children}</>
            }
        </AuthContext.Provider>
    );
}

// トークンの更新コンポーネント
const UpdateToken = () => {
    const { updateAuthInfo } = authStateContext();
    //updateAuthInfo();
    return <></>;
}