/**
 * @fileoverview ポータルのメインレイアウトコンポーネント
 * @module Components
 */
// Reactライブラリ
import { useState } from 'react';
// React-Routerライブラリ
import { Outlet } from 'react-router-dom';

//MUIコンポーネント
import { Box, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
// モックコンポーネント読み込み
//import { MockMessage, MockGrid, MockBox, GridItem, MockLayout } from "@/mock/Components";

// ヘッダー読み込み
import Header from './Header/index.jsx';
import Sidebar from './Sidebar/index.jsx';
// レイアウト定数読み込み
import { DRAWER_WIDTH, HEADER_HEIGHT } from '../constant.js';

//console.log("Import MainLayout");

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    // メインコンテンツの高さ調整
    marginTop: HEADER_HEIGHT,
    //// デスクトップサイズ
    [theme.breakpoints.up('md')]: {
        marginLeft: open ? 0 : -(DRAWER_WIDTH),
        width: open ? `calc(100% - ${DRAWER_WIDTH}px)` : `100%`,
        //padding: '8px'
        // トランザクションのアニメーション必要
    },
    //// タブレットサイズ
    [theme.breakpoints.down('md')]: {
        mx: '8px',
        width: `100%`,
    },
    // モバイルサイズ
    [theme.breakpoints.down('sm')]: {
        mx: '0px',
        width: `100%`,
    }
}));



/** 
 * メインページを生成する関数コンポーネント
 * 
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element} メインページ
 */
export const MainLayout = (props) => {
    console.log("MainLayout");
    // テーマ取得
    const theme = useTheme();
    // モバイルサイズ判定
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    //開閉状態ステート
    const [open, setOpen] = useState(!matchDownMd);

    // サイドパネル開閉ボタンのイベントハンドラ
    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    console.log("MainLayout open");

    const forMobile = theme.breakpoints.down('md') ? { mx: '0px', width: `100%` } : (theme.breakpoints.down('sm') ? { mx: '8px', width: `100%` } : undefined);

    const mainLayoutStyle = {
        marginTop: 8,
        marginLeft: (theme.breakpoints.up('md') ? (open ? 0 : -(DRAWER_WIDTH)) : undefined),
        width: (theme.breakpoints.up('md') ? (open ? `calc(100% - ${DRAWER_WIDTH}px)` : `100%`) : `100%`),
        ...forMobile
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Header drawerOpen={open} handleDrawerToggle={handleDrawerToggle} />
            <Sidebar drawerOpen={open} drawerToggle={handleDrawerToggle} />
            <Box sx={{ ...mainLayoutStyle }}>
                <Outlet />
            </Box>
        </Box>
    );
    // return (
    //     <>
    //         <Box sx={{ display: 'flex' }}>
    //             {/* ヘッダー */}
    //             <Header drawerOpen={open} handleDrawerToggle={handleDrawerToggle} />
    //             {/* サイドバー */}
    //             <Sidebar drawerOpen={open} drawerToggle={handleDrawerToggle} />
    //             {/* メインコンテンツ */}
    //             <Main theme={theme} open={open}>
    //                 {/* アウトレットコンテンツ */}
    //                 <Outlet />
    //             </Main >
    //         </Box>
    //     </>
    // );
};
export default MainLayout;