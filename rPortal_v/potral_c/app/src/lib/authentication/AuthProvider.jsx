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
    //const [authState, setAuthState] = useState(undefined);
    const [authState, accessToken, userInfo, setAuthInfo, clearAuthInfo, updateAuthInfo] = useAuthState();

    // 下層コンポーネントに認証情報を提供
    return (
        <AuthContext.Provider value={{ authState, setAuthInfo, clearAuthInfo }}>
            <AuthLoadingLayer>
                {children}
            </AuthLoadingLayer>
        </AuthContext.Provider>
    );
}
