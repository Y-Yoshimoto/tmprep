// Reactのインポート
import { useState, useMemo } from "react";
// MUIコンポネートのインポート
import { Box, Divider, Stack, Container, Paper } from "@mui/material";
//import Grid from '@mui/material/Grid';;
import Grid from '@mui/material/Grid';

// 共通コンポーネント読み込み
//// レイアウトコンポーネント読み込み
import { MainContentLayout } from "@/component/layout/MainLayout.jsx";
//// ブレイクポイント用カスタムフック読み込み
import { useBreakpoints } from "@/lib/customHooks/useBreakpoints";


// サブコンポーネント読み込み
//// 配置コンポーネント読み込み
import LevelSelectBox from './LevelSelect';
import GainedExp from './GainedExp';
import ShowExperience from './ShowExperience';
import LevelTransitionGraph from './LevelTransitionGraph';
//// カスタムフック読み込み
import { useNeedExp, useAcquireExp } from './tools';


// 経験値計算コンポーネント
export const Experience = (props) => {
    // 獲得するEXP計算ステート(睡眠EXP, 飴EXP, 指定用ステートオブジェクト)
    const { sleepExpGain, candyExpGain, subExpStates } = useAcquireExp();

    // 必要経験値を計算するカスタムフック
    const [needExp, expList, updateNeedExp] = useNeedExp();

    return (
        <>
            <MainContentLayout>
                <ShowExperience {
                    ...{ sleepExpGain, candyExpGain, needExp }} />
                <Divider />
                {/* 経験値計算 */}
                <Grid container
                    sx={{ width: "100%", maxWidth: "100%", mx: "auto", my: 0 }}
                    columns={{ xs: 6, md: 12 }}
                    rowSpacing={1}
                    justifyContent="center" //{{ sm: "center", md: "flex-start" }}
                    //justifyContent="flex-start"
                    columnSpacing={{ xs: 1, sm: 2 }}>
                    <Grid item xs={6} md={4}>
                        <C_Paper>
                            <LevelSelectBox updateNeedExp={updateNeedExp} />
                        </C_Paper>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <C_Paper>
                            <GainedExp {...{ subExpStates, needExp }} />
                        </C_Paper>
                    </Grid>
                    <Grid item xs={6} md={12}>
                        <C_Paper>
                            <LevelTransitionGraph {...{ needExp, expList, sleepExpGain, candyExpGain }} />
                        </C_Paper>
                    </Grid>
                </Grid >

            </MainContentLayout >
        </>
    );
};

// ペーパーコンポーネント
const C_Paper = ({ children }) => {
    // ブレイクポイント用カスタムフック
    const { downMD } = useBreakpoints();
    const elevation = downMD ? 0 : 0;
    return (
        <>
            <Paper elevation={elevation} sx={{ mx: "auto", p: 1, maxWidth: "100%", height: "100%" }}>
                <Container sx={{ p: 0 }}>
                    {children}
                </Container>
            </Paper>
            <Divider sx={{ my: 0 }} />
            {downMD && <Divider sx={{ my: 0 }} />}
        </>
    )
}