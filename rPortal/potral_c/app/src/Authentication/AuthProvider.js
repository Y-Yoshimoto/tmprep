/**
 * 認証情報プロバイダー/認証コンテキストフック
 * 
 */

import { useState, createContext, useContext } from 'react';

// 認証コンテキスト
const AuthContext = createContext();
export const useAuthState = () => useContext(AuthContext);

// 認証情報プロバイダー
export const AuthProvider = ({ children }) => {
    // 認証状態ステート
    const [authState, setAuthState] = useState(undefined);

    // 下層コンポーネントに認証情報を提供
    return (
        <AuthContext.Provider value={{ authState, setAuthState }}>
            {children}
        </AuthContext.Provider>
    );
}
