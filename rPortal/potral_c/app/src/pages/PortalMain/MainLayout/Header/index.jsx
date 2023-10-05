import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Box, ButtonBase, Typography, IconButton, Stack } from '@mui/material';

// アイコンアセット
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';

// ナビゲーション
import { useNavigate } from 'react-router-dom';

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
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar sx={{ height: 64 }}>

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
            <IconButton sx={{ borderRadius: '12px', overflow: 'hidden' }}
                onClick={handleDrawerToggle}>
                <MenuIcon />
            </IconButton>
        </Box>
    );
}

// ヘッダー右側コンテンツ
function Right_Heder({ handleSignOut }) {
    // テーマ取得
    const theme = useTheme();
    return (
        <Stack direction="row" spacing={2}>
            <IconButton sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                <NotificationsIcon />
            </IconButton>
            <IconButton onClick={handleSignOut} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                <LogoutIcon />
            </IconButton>
        </Stack>
    );
}


export default Header;