// ヘッダーコンポーネント
// ヘッダーはAppBarコンポーネントを使用

// React
import { useState } from 'react';
// ナビゲーション
import { useNavigate } from 'react-router-dom';
// ロゴスタイル
import PropTypes from 'prop-types';


// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Typography, IconButton, Stack } from '@mui/material';
import { C_IconButton } from '@/component/common/CustomButtons';
// アイコンアセット
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';

// レイアウト定数読み込み
import { HEADER_HEIGHT } from '../../constant.js';

// お知らせコンテンツ
import { PopupNotification } from '@/component/common/Notifications/popup.jsx';


// ロゴ
export const LogoItem = ({ hSize = 'h6' }) => {
    const theme = useTheme();
    return (
        <Typography
            variant={hSize}
            gutterBottom
            sx={{ color: theme.palette.text.primary, flexGrow: 1 }}
        >
            {'Logo'}
        </Typography>
    );
};

LogoItem.propTypes = {
    hSize: PropTypes.string
};

// メインナビゲーションバー/ヘッダー
const Header = ({ handleDrawerToggle, drawerOpen }) => {
    // テーマ取得
    const theme = useTheme();
    const leftDrawerOpened = drawerOpen;

    // ログアウトボタン処理
    const navigate = useNavigate();
    const handleSignOut = () => {
        navigate("/signout");
    };

    return (
        <>
            {/* logo & toggler button */}
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    borderBottom: 1,
                    borderColor: 'neutral.divider',
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar sx={{ height: HEADER_HEIGHT }}>
                    {/* 左詰エレメント */}
                    <Left_Heder handleDrawerToggle={handleDrawerToggle} />
                    {/* スペース */}
                    <Box sx={{ flexGrow: 1 }} />
                    {/* 右詰エレメント */}
                    <Right_Heder handleSignOut={handleSignOut} />
                </Toolbar>
            </AppBar>
        </>
    );
};

// ヘッダー左側コンテンツ
function Left_Heder({ handleDrawerToggle }) {
    // テーマ取得
    const theme = useTheme();
    return (
        <Box
            sx={{
                //width: 228,
                display: 'flex',
                [theme.breakpoints.down('md')]: {
                    width: 'auto'
                }
            }}
        >
            <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                <LogoItem />
            </Box>
            <C_IconButton onClick={handleDrawerToggle} title="Menu">
                <MenuIcon />
            </C_IconButton>
        </Box>
    );
}

// ヘッダー右側コンテンツ
function Right_Heder({ handleSignOut }) {
    // テーマ取得
    const theme = useTheme();

    // 通知アイコンクリック時の処理
    const [notificationOpen, setNotificationOpen] = useState(false);
    const handleNotificationClick = () => {
        setNotificationOpen(!notificationOpen);
    }

    return (
        <>
            {/* ヘッダーボタン */}
            <Stack direction="row" spacing={2}>
                <C_IconButton onClick={handleNotificationClick} title="Notifications">
                    <NotificationsIcon />
                </C_IconButton>
                <C_IconButton onClick={handleSignOut} title="Logout" >
                    <LogoutIcon />
                </C_IconButton>
            </Stack>
            {/* 通知表示 */}
            {notificationOpen && (
                <PopupNotification />
            )}
        </>
    );
}


export default Header;