import { useState } from 'react';
// MUI コンポーネント
import { Box, Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


export const ArrangementItems = ({ wrapSetDataList }) => {
    const putItem = [{ id: "breakfast", label: "朝食" }, { id: "lunch", label: "昼食" }, { id: "dinner", label: "夕食" }]


    return (
        <>
            <Grid container spacing={{ xs: 1 }} columns={{ xs: 2, sm: 12, md: 12 }}>
                {Array.from(putItem).map((item, index) => (
                    <Grid xs={2} sm={4} md={4} key={index}>
                        <DropBox ShowLabel={item.label} setUpdata={wrapSetDataList(index)} />
                    </Grid>
                ))}
            </Grid>

        </>
    )
}
// <DropBox ShowLabel="朝" setUpdata={wrapSetDataList(0)} />
// <DropBox ShowLabel="昼" setUpdata={wrapSetDataList(1)} />
// <DropBox ShowLabel="夜" setUpdata={wrapSetDataList(2)} />

const DropBox = (props) => {
    const { ShowLabel, setUpdata } = props;
    // ドロップ設定データ
    const [draggedData, setDraggedData] = useState(null);
    const shortLabel = draggedData?.name; //|| "";
    // ドロップ時の処理
    const handleDrop = (e, setData) => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        setData(data);
        setUpdata(data);
    }
    // ドロップ許可
    const allowDrop = (e) => {
        e.preventDefault();
    }

    // クリアボタン
    const handleClear = () => {
        setDraggedData("");
        setUpdata("");
    }

    return (
        <div onClick={handleClear}
            onDrop={(e) => handleDrop(e, setDraggedData)}
            onDragOver={allowDrop}
        >
            <Box sx={{ border: '2px solid blue', width: 200, height: 80 }}>
                {ShowLabel}<br />   {shortLabel}
            </Box>
        </div >

    )
};