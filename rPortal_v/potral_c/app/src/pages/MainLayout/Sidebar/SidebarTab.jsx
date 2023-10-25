/** 
 * サイドパネルのグローバルナビゲーションタブ
 */

import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
// MUI Icons
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import EggIcon from '@mui/icons-material/Egg';
import FileUploadIcon from '@mui/icons-material/FileUpload';
// React ルーティングライブラリ
import { useNavigate, useLocation } from 'react-router-dom';

export const SidebarTab = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState("dashboard");

    // 切り替え操作
    const handleChange = (event, newValue) => {
        console.debug(`handleChange: ${newValue}`);
        setValue(newValue);
        navigate(newValue);
    };

    // 共通スタイル
    const tab_style = {
        iconPosition: 'start', sx: {
            justifyContent: 'flex-start',
            '&.Mui-selected': {
                borderRight: 5,
            }
        }
    };

    return (
        <Box
            sx={{ flexGrow: 1, display: 'flex', height: 224 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 0, borderColor: 'divider', width: '100%', textAlign: 'left' }}
            >
                <Tab icon={<DashboardIcon />} label="ダッシュボード" value="dashboard" {...tab_style} />
                <Tab icon={<EditIcon />} label="エナジー値入力" value="input"{...tab_style} />
                <Tab icon={<RestaurantMenuIcon />} label="レシピ集" value="recipe" {...tab_style} />
                <Tab icon={<EggIcon />} label="使用食材見積" value="ingredients-estimated"{...tab_style} />
                <Tab icon={<FileUploadIcon />} label="経験値算出" value="experience" {...tab_style} />

            </Tabs>
        </Box>
    );
}

export default SidebarTab;