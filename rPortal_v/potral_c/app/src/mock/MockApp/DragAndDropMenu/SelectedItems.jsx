import { useState } from 'react';
// MUI コンポーネント
import { Box, List, ListItem, Divider } from '@mui/material';

// 料理リスト
import recipes from '@/store/food/dish_mini';

export const SelectedItems = () => {
    //console.dir(recipes);// 料理リスト

    return (
        <List sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper', mx: 2 }}>
            {recipes.map((value, index) => (
                <div key={`${index}_l`}>
                    <DragBox sendData={value} key={`${index}_l`} index>
                        <ListItem
                            key={index}
                            disableGutters
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'grey.200',
                                },
                            }}
                        >
                            {value.name}
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
            style={{ cursor: 'grab', WebkitUserDrag: 'element' }}
        >
            {children}
        </div>
    )
};