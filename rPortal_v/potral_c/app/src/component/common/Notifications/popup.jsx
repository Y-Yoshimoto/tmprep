// ヘッダー表示用ポップアップ画面
// ヘッダーの通知アイコンをクリックした際に表示されるポップアップ形式の通知画面
// MUIコンポーネント
import { List, ListItem, ListItemText, Paper } from '@mui/material';


export const PopupNotification = () => {
    return (
        <Paper elevation={3} style={{ position: 'absolute', top: '50px', right: '80px', padding: '10px' }}>
            {/* 仮List */}
            <List>
                <ListItem disablePadding>
                    <ListItemText primary="Notification1" />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="Notification2" />
                </ListItem>
            </List>
        </Paper>
    );
}