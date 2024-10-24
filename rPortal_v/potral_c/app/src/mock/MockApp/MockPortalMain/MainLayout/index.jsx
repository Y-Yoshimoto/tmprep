/**
 * @fileoverview ポータルのメインレイアウトコンポーネント
 * @module Components
 */
// Reactライブラリ
import { useState } from 'react';

//MUIコンポーネント
import { Box, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
// モックコンポーネント読み込み
import { MockMessage, MockLayoutBox } from "@/mock/Components";

// ヘッダー読み込み
import Header from './Header/index.jsx';
import Sidebar from './Sidebar/index.jsx';
import { DRAWER_WIDTH, HEADER_HEIGHT } from './constant.js';


// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    // メインコンテンツの高さ調整
    marginTop: HEADER_HEIGHT,
    // スライドイン時のアニメーション
    transition: theme.transitions.create(
        'margin',
        open
            ? {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }
            : {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }
    ),
    // メインコンテンツレイアウト
    //// デスクトップサイズ
    [theme.breakpoints.up('md')]: {
        marginLeft: open ? 0 : -(DRAWER_WIDTH),
        width: open ? `calc(100% - ${DRAWER_WIDTH}px)` : `100%`,
        mx: '8px'
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

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                {/* ヘッダー */}
                <Header drawerOpen={open} handleDrawerToggle={handleDrawerToggle} />
                {/* サイドバー */}
                <Sidebar drawerOpen={open} drawerToggle={handleDrawerToggle} />
                {/* メインコンテンツ */}
                <Main theme={theme} open={open}>
                    <MockLayoutBox>
                        <MockMessage message="メインコンテンツ" />
                    </ MockLayoutBox>
                </Main >
            </Box>
        </>
    )
};