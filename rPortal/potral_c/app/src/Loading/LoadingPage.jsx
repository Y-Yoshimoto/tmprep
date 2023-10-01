/** 
 * 読み込み中ローディングページ
 */
// Reactフック
import { useContext } from "react";
// MUIコンポーネント
import { Box, CircularProgress } from '@mui/material';

// 認証状態コンテキスト読み込み
import { useAuthState } from '@/Authentication/AuthProvider';

/** 
 * ローディングページを生成する関数コンポーネント
 * 読み込み中である事を示すローディングアニメーションを表示する
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element} ローディングページ
 */
export const LoadingPage = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress size={100} />
        </Box>
    )
};