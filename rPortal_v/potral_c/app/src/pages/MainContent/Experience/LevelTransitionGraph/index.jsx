// MUI
import { Box } from '@mui/material';

// Nivoグラフ
import { SvgResponsiveLine, CanvasResponsiveLine } from './SampleLineGraph';
import { DayAndLevelGrap } from './LineGraph';
import { constSelector } from 'recoil';

// グラフ用の基礎データを生成する
import calculationDateAndLevel from './calculationDateAndLevel';

export const LevelTransitionGraph = (props) => {

    // グラフ用の元データを生成する
    //console.time("calculationDateAndLevel");
    const graphBaseDateSet = calculationDateAndLevel(props);
    //console.timeEnd("calculationDateAndLevel");
    //console.log(graphBaseDateSet);  // デバッグ用
    const lineData = transGraphDate(graphBaseDateSet, "level", "hsl(263, 70%, 50%)", (d) => ({ "x": d.day, "y": d.level }));
    return (
        <>
            グラフ<br />
            <Box style={{ height: '400px', width: '100%' }}>
                <DayAndLevelGrap data={lineData} />
            </Box>
        </>
    )
}

export default LevelTransitionGraph;

// グラフで使用するデータを抽出する
const transGraphDate = (data, id, color, extraction) => ([{
    "id": id,
    "color": color,
    "data": data.map((d) => extraction(d))
}]);






