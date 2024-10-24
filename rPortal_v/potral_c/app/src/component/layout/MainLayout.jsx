// MUIコンポーネント
import { useTheme } from '@mui/material/styles';
import { Box, Container, useMediaQuery } from '@mui/material';

// ブレイクポイント用カスタムフック読み込み
import { useBreakpoints } from "@/lib/customHooks/useBreakpoints";

/**
 * メインコンテンツ配置レイアウトコンポーネント
 * 
 * @param {Object} props - コンポーネントのプロパティ
 * @param {JSX.Element} props.children - 子要素
 * @param {number} [props.layoutMaginX=2] - レイアウトの横方向のマージン
 * @param {number} [props.layoutMaginY=4] - レイアウトの縦方向のマージン
 * @param {string} [props.maxWidth='md'] - レイアウトの最大幅
 * {xs: 0px, sm: 600px, md: 960px, lg: 1280px, xl: 1920px}
*/
export const MainContentLayout = ({ children, maxWidth = 'lg' }) => {
    const { downMD } = useBreakpoints();

    // ブレイクポイント用カスタムフック
    const { upMD, upLG } = useBreakpoints();

    // テーマ取得
    const theme = useTheme();
    // モバイルサイズ判定
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const layoutMaginX = upLG ? 2 : 0;
    const layoutMaginY = upMD ? 4 : 2;
    //maxWidth={maxWidth}
    return (
        <Container maxWidth={maxWidth}>
            <Box sx={{ mx: layoutMaginX, my: layoutMaginY }}>
                {children}
            </Box>
        </Container>)
};