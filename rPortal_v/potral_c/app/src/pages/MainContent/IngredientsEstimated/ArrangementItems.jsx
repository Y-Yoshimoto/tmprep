import { useState } from 'react';

// MUI コンポーネント
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { ParentComponent } from '@/component/layout/FixedComponent';


export const ArrangementItems = (props) => {
    const { mealsMenus } = props;
    const putItem = [{ id: "breakfast", label: "朝食", data: mealsMenus[0] },
    { id: "lunch", label: "昼食", data: mealsMenus[1] },
    { id: "dinner", label: "夕食", data: mealsMenus[2] }]
    //item={item} 
    // スクロール用のスタイル
    const cssStyle = { backgroundColor: '#FFFFFF', padding: 0, width: "100%" }; //'white'
    return (
        <>
            <Grid container spacing={{ sm: 2 }} columns={{ xs: 6 }} style={cssStyle}>
                {putItem.map((item, index) => (
                    <Grid xs={2} key={index} >
                        <MenuBox {...{ ...props, item, index }} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

const MenuBox = (props) => {
    const { index, item, forcasIndex, setForcasIndex, clearMenus } = props;
    // クリック時にフォーカス変更
    const onClick = (_index) => () => {
        setForcasIndex(_index);
    }
    const onDoubleClick = (_index) => () => {
        clearMenus(_index);
    }

    // フォーカス時に色変更
    const color = index === forcasIndex ? "red" : "blue";
    const borderStyle = `3px solid ${color}`;

    return (
        <div onClick={onClick(index)} onDoubleClick={onDoubleClick(index)}>
            <Box sx={{ border: borderStyle, maxWidth: 200, minWidth: 125, height: 80 }}>
                {item.label}<br />   {item.data.name}
            </Box>
        </div >

    )
};