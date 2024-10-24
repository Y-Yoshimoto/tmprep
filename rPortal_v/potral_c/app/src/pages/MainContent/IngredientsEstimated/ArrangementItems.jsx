import { useState } from 'react';

// MUI コンポーネント
import { Box, Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { ParentComponent } from '@/component/layout/FixedComponent';


export const ArrangementItems = (props) => {
    const { mealsMenus } = props;
    const putItem = [{ id: "breakfast", label: "朝食", data: mealsMenus[0] },
    { id: "lunch", label: "昼食", data: mealsMenus[1] },
    { id: "dinner", label: "夕食", data: mealsMenus[2] }]
    //<Grid container spacing={{ sm: 1 }} columns={{ xs: 6 }} style={cssStyle}>

    const cssStyle = { backgroundColor: '#FFFFFF', width: "100%", "margin-left": 1 }; //'white'

    /*
    //Stack
    return (
        <Stack spacing={0} direction="row" style={cssStyle}>
            {putItem.map((item, index) => (
                <MenuBox {...{ ...props, item, index }} />
            ))}
        </Stack>
    )*/

    // Gridsize={{ xs: 6, sm: 2, xl: 6 }}
    return (
        <>
            <Grid container spacing={1} style={cssStyle}>
                {putItem.map((item, index) => (
                    <Grid size={{ xs: 4, sm: 12, md: 4 }} key={index} >
                        <MenuBox {...{ ...props, item, index }} />
                    </Grid>
                ))}
            </Grid >
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
    //const color = index === forcasIndex ? "primary.light" : "primary.light"; //"red" : "blue";
    //const borderStyle = `3px solid`;
    const borderColor = index === forcasIndex ? "tertiary.main" : "primary.dark";
    //const borderColor = index === forcasIndex ? "red" : "blue";
    //console.log("index", index, "forcasIndex", forcasIndex, "borderColor", borderColor);

    return (
        <div onClick={onClick(index)} onDoubleClick={onDoubleClick(index)}>
            <Box sx={{ border: 3, borderColor: borderColor, borderRadius: '4px', maxWidth: 300, minWidth: { xs: '33%', sm: '33%' }, height: { xs: 80, sm: 100 } }}>
                <div style={{ fontSize: '14px' }}>{item.label}<br />   {item.data.name}</div>
            </Box>
        </div >

    )
};