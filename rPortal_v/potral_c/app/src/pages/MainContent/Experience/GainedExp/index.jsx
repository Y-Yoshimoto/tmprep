/*
経験値倍率計算コンポーネント
    睡眠EXP, 性格補正, 投入アメ数, 睡眠EXPボーナス数 から獲得経験値倍率及び残りの必要経験値計算情報を算出する。
*/

// Reactのインポート
import { useState, useEffect } from "react";

// MUIコンポネートのインポート
import { Box, Stack, Slider, TextField } from "@mui/material";
// 経験値補正ボタン用アイコン
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';

// トグルボタンコンポーネント読み込み
import { C_ToggleButtonGroup } from "@/component/common/CustomButtons/index.jsx";
// 整数値選択コンポーネント
import { C_IntSelecter, C_IntSelecter_Input } from "@/component/common/CustomButtons/index.jsx";

import { SLEEPEXPBONUSRATE, CANDYEXP } from '../constant.js';

/////// コンポーネント ///////

// 経験値倍率計算コンポーネント
export const GainedExp = ({ subExpStates, needExp }) => {
    // 睡眠EXP, 性格補正, 投入アメ数, 睡眠EXPボーナス数ステート
    const { sleepExp, setSleepExp,
        personality, setPersonality,
        usageCandy, setUsageCandy,
        sleepExpBonus, setSleepExpBonus,
    } = subExpStates;

    // 最大必要飴数
    const maxNeedCandy = Math.ceil((needExp) / CANDYEXP);


    return (
        <>
            経験値倍率設定
            <Box display='flex' flexWrap='wrap'>
                {/* 1段目 */}
                <Stack direction="row" spacing={4} justifyContent="space-around" sx={{ maxWidth: 300, my: 1, mx: 2 }}>
                    {/* 推定獲得睡眠経験値倍率設定 */}
                    {/* <SleepExpButton value={sleepExp} setValue={setSleepExp} /> */}
                    <SleepExpToggleButton {...{ sleepExp, setSleepExp }} />
                    {/* 性格補正 */}
                    <PersonalityButton personality={personality} setPersonality={setPersonality} />

                </Stack>
                {/* 2段目 */}
                <Stack direction="row" spacing={4} justifyContent="space-around" sx={{ width: '100%', maxWidth: 300, my: 1, mt: 5 }}>
                    {/* 睡眠EXPボーナス */}
                    <SleepExpBonus {...{ sleepExpBonus, setSleepExpBonus }} />
                    {/* 投入アメ数 仮置き
                <C_IntSelecter_Input
                    min={0} 
                    max={maxNeedCandy}
                    value={usageCandy}
                    setValue={setUsageCandy}
                    width={192}
                    textLabel="投入アメ数(仮)"
                    addLabel="個"
                /> */}
                    <CandySlider {...{ value: usageCandy, setValue: setUsageCandy, maxNeedCandy }} />
                </Stack>
            </Box>
        </>
    )
};
export default GainedExp;

// 睡眠経験値設定コンポーネント
const SleepExpButton = ({ value, setValue }) => {
    // スライダーの値ステート
    // スライダーの値変更時のイベント
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    // テキストボックスの値変更時のイベント
    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? 0 : Number(event.target.value));
    };

    // テキストボックスのフォーカスアウト時のイベント
    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };
    // スライダーテキストボックスの最大最小ステップ値
    const inputProps = {
        step: 5,
        min: 0,
        max: 100,
        type: 'number',
    }

    return (
        <>
            <Box sx={{ width: "100%" }}>
                睡眠EXP指定
                <Stack spacing={2} direction="row">
                    <Slider
                        {...inputProps}
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                    />
                    <TextField
                        value={value}
                        size="small"
                        variant="standard"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={inputProps}
                        sx={{ width: 80 }}
                    />
                </Stack>
            </Box>
        </>
    )

}

// 性格補正コンポーネント
const PersonalityButton = ({ personality, setPersonality }) => {

    //選択肢リスト
    const options = [
        { label: "down", value: 0.8, item: <KeyboardDoubleArrowDownIcon sx={{ color: "#FF0000" }} /> },
        { label: "none", value: 1, item: <HorizontalRuleOutlinedIcon /> },
        { label: "up", value: 1.2, item: <KeyboardDoubleArrowUpIcon sx={{ color: "#0000FF" }} /> },
    ]

    return (
        <C_ToggleButtonGroup value={personality} setValue={setPersonality} options={options} buttonLabel="性格補正" dataTestId="PersonalityToggle" />
    )
}

// 睡眠EXP設定値
const SleepExpToggleButton = ({ sleepExp, setSleepExp }) => {
    // ボタン内部表示ラベルコンポーネント
    const InLabel = x => <Box sx={{ width: 24 }} > {x}</ Box>
    //選択肢リスト
    const options = [80, 90, 100].map(x => ({ label: x, value: x, item: InLabel(x) }))

    return (
        <C_ToggleButtonGroup value={sleepExp} setValue={setSleepExp} options={options} buttonLabel="睡眠EXP指定" dataTestId="SleepExpToggle" />
    )
}

// 睡眠EXPボーナス設定値
const SleepExpBonus = ({ sleepExpBonus, setSleepExpBonus }) => {
    return (
        <>
            <C_IntSelecter
                min={0}
                max={5}
                value={sleepExpBonus}
                setValue={setSleepExpBonus}
                width={120}
                textLabel="睡眠EXPボーナス"
                addLabel="匹"
            />
        </>)
}



// 仮飴スライダー
const CandySlider = ({ value, setValue, maxNeedCandy }) => {
    const marks = [
        {
            value: 0,
            label: '0個',
        },
        {
            value: maxNeedCandy,
            label: `${maxNeedCandy}個`,
        }
    ];

    return (
        <>
            <Box sx={{ width: "100%", ml: 2 }}>
                <Slider
                    value={typeof value === 'number' ? value : 0}
                    onChange={(event, newValue) => { setValue(newValue) }}
                    max={maxNeedCandy}
                    marks={marks}
                    step={1}
                    valueLabelDisplay="on"
                />
            </Box>
        </>
    )

}