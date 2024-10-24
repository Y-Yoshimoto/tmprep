// MUI コンポーネント
//// List関連コンポーネント
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// MUI Icons
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const SidebarMenu = () => {

    return (
        <List sx={{ padding: 0 }}>
            <SidebarMenuButton icon={<DashboardIcon />} labelText="Dashboard" />
            <SidebarMenuButton icon={<EditIcon />} labelText="Input" />
            <SidebarMenuButton icon={<RestaurantMenuIcon />} labelText="Recipe" />
            <SidebarMenuButton icon={<FileUploadIcon />} labelText="Experience" />
        </List>
    )
}

/** サイドパネルボタンコンポーネント
 * @param {Object} props
 * @param {Object} props.icon - ボタンアイコン
 * @param {string} props.labelText - ボタンラベルテキスト
 * @returns {JSX.Element} 
*/
function SidebarMenuButton(props) {
    const { icon, labelText } = props;

    // サイドパネルボタンのスタイル
    const sx_style = {
        // 選択時のスタイル
        '&:hover, &.Mui-focusVisible': {
            backgroundColor: 'primary.light',
            borderRight: 5,
            borderRightColor: 'primary.dark',
        },
    }
    return (
        <ListItem disablePadding>
            <ListItemButton sx={sx_style}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={labelText} />
            </ListItemButton>
        </ListItem>
    )
}

export default SidebarMenu;