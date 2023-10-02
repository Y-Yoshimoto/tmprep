import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Box, ButtonBase, Typography, IconButton, Stack } from '@mui/material';

// アイコンアセット
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';


// ロゴ
export const LogoItem = ({ hSize = 'h6' }) => {
    return (
        <Typography variant={hSize} gutterBottom>
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

    return (
        <>
            {/* logo & toggler button */}
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    //bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar sx={{ height: 64 }}>
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

                    {/* 左詰エレメント */}
                    <Box sx={{ flexGrow: 1 }} />{/* 左詰用スペース */}
                    <Stack direction="row" spacing={2}>
                        <IconButton sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                            <LogoutIcon />
                        </IconButton>
                    </Stack>

                </Toolbar>
            </AppBar>
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;