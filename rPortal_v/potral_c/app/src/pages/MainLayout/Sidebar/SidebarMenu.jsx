// MUI コンポーネント
// React ルーティングライブラリ
import { useNavigate, useLocation } from 'react-router-dom';

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
            <SidebarMenuButton icon={<DashboardIcon />} labelText="Dashboard" path="dashboard" />
            <SidebarMenuButton icon={<EditIcon />} labelText="Input" path="input" />
            <SidebarMenuButton icon={<RestaurantMenuIcon />} labelText="Recipe" path="recipe" />
            <SidebarMenuButton icon={<FileUploadIcon />} labelText="Experience" path="experience" />
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
    const { icon, labelText, path } = props;

    // ページ判定用フック
    const isSelect = location.pathname.includes(path);
    //console.debug(`${path} isSelect: ${isSelect}`);

    // ページ遷移用フック/イベントハンドラ
    const navigate = useNavigate();
    const onClick = () => {
        //console.debug(`onClick: ${path}`);
        setTimeout(() => { navigate(path); }, 100);
        //navigate(path);
    }

    // サイドパネルボタンのスタイル
    const sx_style = {
        // オーバーレイ時のスタイル
        '&:hover, &.Mui-focusVisible': {
            backgroundColor: 'primary.light',
            //borderRight: 5,
            borderRightColor: 'primary',
        },
        // 選択時のスタイル
        '&.Mui-selected': {
            color: 'primary.contrastText',
            backgroundColor: 'primary.light',
            borderRight: 5,
            borderRightColor: 'primary.dark',
        },
    };

    return (
        <ListItem disablePadding sx={{}}>
            {/*<ListItemButton sx={sx_style} disabled={isSelect}>*/}
            <ListItemButton onClick={onClick} sx={sx_style} selected={isSelect} disabled={isSelect}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={labelText} />
            </ListItemButton>
        </ListItem>
    )
}

export default SidebarMenu;