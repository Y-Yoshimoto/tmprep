/*
    レベル選択コンポーネント
    ・現在のレベルとターゲットレベルを設定する。
*/

// Reactのインポート
import { useState, useMemo, useEffect, useLayoutEffect } from "react";

// MUIコンポネートのインポート
import { Box, Container, TextField, Stack, Slider, Switch, FormControlLabel, Typography } from "@mui/material";

// レベル遷移の左右矢印アイコン
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// 整数値選択コンポーネント
import { C_IntSelecter } from "@/component/common/CustomButtons/index.jsx";

// 最大レベル
import { MAX_LEVEL } from '../constant.js';

// レベル選択コンポーネント横幅
const LEVEL_SELECT_BOX_WIDTH = 80;
export const LevelSelectBox = ({ updateNeedExp }) => {
    // 現在のレベル
    const [currentLevel, setCurrentLevel] = useState(1);
    // ターゲットレベル
    const [targetLevel, setTargetLevel] = useState(currentLevel + 1);
    // 経験値タイプ補正(1, 1.5)のいずれかの値を保持する。
    const [expTypeRate, setExpTypeRate] = useState(1);

    // ターゲットレベルが現在のレベル以下の場合は、ターゲットレベルを現在のレベル+1にする。
    if (targetLevel < currentLevel) setTargetLevel(currentLevel);
    //console.log(`currentLevel:${currentLevel}, targetLevel:${targetLevel}`);

    // 現在のレベルとターゲットレベルが変更された場合、必要経験値を更新する。
    useEffect(() => {
        updateNeedExp(currentLevel, targetLevel, expTypeRate);
    }, [currentLevel, targetLevel, expTypeRate]);

    return (
        <>
            レベル設定
            <Box display='flex' flexWrap='wrap'>
                <LevelSelectSet {...{ currentLevel, setCurrentLevel, targetLevel, setTargetLevel }} />
                {/* 経験値倍率切り替えスイッチ */}
                <ExpRateSwitch setValue={setExpTypeRate} />
            </Box>
        </>
    );
};

export default LevelSelectBox;


const LevelSelectSet = ({ currentLevel, setCurrentLevel, targetLevel, setTargetLevel }) => {
    return (
        <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2 }}
            justifyContent="space-between"
            sx={{ minWidth: 220 }}>
            {/* 現在のレベル */}
            <C_IntSelecter
                min={1}
                max={MAX_LEVEL}
                value={currentLevel}
                width={LEVEL_SELECT_BOX_WIDTH}
                setValue={setCurrentLevel}
                textLabel="AsIs"
                dataTestId="CurrentLevelSelecter"
            />
            {/* 中間の矢印 */}
            <Stack direction="column"
                spacing={0}
                alignItems="center">
                <Typography sx={{ width: 24, textAlign: "center" }}>{`+${targetLevel - currentLevel}`}</Typography>
                <ArrowForwardIcon />
            </Stack>
            {/* ターゲットのレベル */}
            <C_IntSelecter
                min={currentLevel}
                max={MAX_LEVEL}
                value={targetLevel}
                width={LEVEL_SELECT_BOX_WIDTH}
                setValue={setTargetLevel}
                textLabel="ToBe"
                dataTestId="TargetLevelSelecter"
            />

        </Stack >
    )
}


// 経験値倍率切り替えコンポーネント(ONの時は1.5倍、OFFの時は1倍)
const ExpRateSwitch = (props) => {
    const { value, setValue } = props;
    // スイッチの値ステート
    const [checked, setChecked] = useState((value === 1.5 ? true : false));

    // スイッチの値変更時のイベント
    const handleChange = (event) => {
        setChecked(event.target.checked);
        setValue(event.target.checked ? 1.5 : 1);
    };

    return (
        <>
            <FormControlLabel
                sx={{ mt: 1 }}
                value="exprate"
                control={
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        size="small"
                        inputProps={{ 'aria-label': 'exprate' }}
                    />
                }
                label="600族"
                labelPlacement="top"
            />
        </>
    );
}
