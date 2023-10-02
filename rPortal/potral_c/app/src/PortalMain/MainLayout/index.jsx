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
import { MockMessage, MockGrid, MockBox, GridItem, MockLayout } from "@/Mock/Components";

// ヘッダー読み込み
import Header from './Header/index.jsx';
import Sidebar from './Sidebar/index.jsx';
//import { drawerWidth } from 'store/constant';
const drawerWidth = 240;


// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
    [theme.breakpoints.up('md')]: {
        marginLeft: open ? 0 : -(drawerWidth - 20),
        width: `calc(100% - ${drawerWidth}px)`
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px'
    },
    [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px',
        marginRight: '10px'
    }
}));

/** 
 * メインページを生成する関数コンポーネント
 * 
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element} メインページ
 */
export const PortalMain = ({ setAuthState }) => {
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
                <Header drawerOpen={open} handleDrawerToggle={handleDrawerToggle} />

                <Sidebar drawerOpen={open} drawerToggle={handleDrawerToggle} />
                <Main theme={theme} open={open}>
                    <MockMessage message="メインページ" />
                    <Box
                        sx={{
                            width: 300,
                            height: 300,
                            backgroundColor: 'primary.dark',
                        }}
                    />
                </Main >
            </Box>
        </>
    )
};