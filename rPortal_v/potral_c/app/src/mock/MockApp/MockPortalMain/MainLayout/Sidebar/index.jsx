import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Drawer, useMediaQuery } from '@mui/material';

// サイドバーメニュー
import SidebarMenu from './SidebarMenu';

import { DRAWER_WIDTH, HEADER_HEIGHT } from '../constant.js';

// ロゴコンポーネント
export const LogoItem = ({ hSize = 'h6' }) => {
    return (
        <Typography variant={hSize} gutterBottom>
            {'rPortal'}
        </Typography>
    );
};

LogoItem.propTypes = {
    hSize: PropTypes.string
};

// サイドドロワーコンポーネント

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const drawer = (
        <>
            {/* ロゴ */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                    <LogoItem />
                </Box>
            </Box>
            {/* メニュー */}
            <SidebarMenu />
        </>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? DRAWER_WIDTH : 'auto' }} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: DRAWER_WIDTH,
                        borderTop: 1,
                        borderBottom: 1,
                        borderColor: 'neutral.divider',
                        [theme.breakpoints.up('md')]: {
                            top: HEADER_HEIGHT
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object
};

export default Sidebar;