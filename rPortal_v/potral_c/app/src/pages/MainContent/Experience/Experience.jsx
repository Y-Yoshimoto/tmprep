// Reactのインポート
import { useState, useMemo } from "react";

// MUIコンポネートのインポート
import { Select, Autocomplete, TextField } from "@mui/material";

// モックコンポーネント読み込み
import { MockMessage, MockLayoutBox } from "@/mock/Components";

// 経験値リスト読み込み
import EXPERIENCE_LIST from '@/store/experience/lv-exp';

export const Experience = (props) => {
    // 現在のレベル
    const [currentLevel, setCurrentLevel] = useState(0);
    // ターゲットレベル
    const [targetLevel, setTargetLevel] = useState(0);
    // 使用アメ数
    const [useCandy, setUseCandy] = useState(0);
    // 経験値倍率
    const [expRate, setExpRate] = useState(1);

    const selectLabel = useMemo(() => {
        return EXPERIENCE_LIST.map(x => generateSelectLabel(x));
    }, []);

    console.log(selectLabel);



    return (
        <>
            現在のレベル
            <Autocomplete
                //disablePortal
                id="currentLevel"
                getOptionDisabled={(option) =>
                    option === 10
                }
                options={selectLabel}
                sx={{ width: 100 }}
                renderInput={(params) => <TextField {...params} label="現在のレベルLv." />}
            />
            ターゲットのレベル
            <Autocomplete
                //disablePortal
                id="currentLevel"
                getOptionDisabled={(option) =>
                    option.level <= currentLevel
                }
                options={selectLabel}
                sx={{ width: 100 }}
                renderInput={(params) => <TextField {...params} label="ターゲットのレベルLv." />}
            />
        </>
    );
};

// 経験値リストからレベルと経験値をディストラクチャリングする。
const destructureExperience = (x) => {
    return {
        level: x.level,
        exp: x.exp
    };
};
// 経験値リストから選択肢ラベルを生成する。
const generateSelectLabel = (x) => {
    return (
        { label: String(x.level), ...x }
    )
};