import { useState } from 'react';
// MUI コンポーネント
import { Box, List, ListItem, Divider } from '@mui/material';

export const SelectedItems = () => {
    const recipes = [
        { label: "料理1:  エナジー 100", data: { shortLabel: "料理1", energy: 100 } },
        { label: "料理2:  エナジー 200", data: { shortLabel: "料理2", energy: 200 } },
        { label: "料理3:  エナジー 300", data: { shortLabel: "料理3", energy: 300 } },
        { label: "料理4:  エナジー 400", data: { shortLabel: "料理4", energy: 400 } }];


    return (
        <List sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper', mx: 2 }}>
            {recipes.map((value, index) => (
                <div key={`${index}_l`}>
                    <DragBox sendData={value.data} key={`${index}_l`} index>
                        <ListItem
                            key={index}
                            disableGutters
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'grey.200',
                                },
                            }}
                        >
                            {value.label}
                        </ListItem>
                    </DragBox>
                    <Divider key={`${index}_D`} />
                </div>
            ))}
        </List>

    )
}

/// ドラックアイテムコンポーネント
/// childrenコンポーネントをドラック可能にし、ドロップ先にデータを渡す
const DragBox = ({ children, ...props }) => {
    // ドラック設定データ
    const { sendData, index } = props;
    // ドラッグイベント処理
    const handleDragStart = (e, data) => {
        e.dataTransfer.setData('text/plain', JSON.stringify(data));
    }

    return (
        <div
            key={`${index}_d`}
            onDragStart={(e) => handleDragStart(e, sendData)}
            draggable="true"
            style={{ cursor: 'grab' }}
        >
            {children}
        </div>
    )
};