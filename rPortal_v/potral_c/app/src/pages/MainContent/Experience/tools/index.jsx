// React
import { useState } from "react";

// 経験値リスト読み込み
import EXPERIENCE_LIST from '@/store/experience/lv-exp';

// 定数の読み込み
import { SLEEPEXPBONUSRATE, CANDYEXP } from '../constant.js';



// 必要経験値計算カスタムフック
export const useNeedExp = () => {
    // 必要経験値
    const [needExp, _setNeedExp] = useState(EXPERIENCE_LIST[1].exp);
    // 必要経験値オブジェクトリスト
    const [expList, _setExpList] = useState([]);


    // 指定レベル必要経験値を計算する関数
    const calculatorNeedExp = (expList) => {
        //_setExpList(addDiffAccum(expList));
        return (expList.reduce((acc, cur) => acc + cur.exp, 0));
    }
    /* 現在のレベルがターゲットレベルの間のレベル/経験者リストを取得する
       レベルレベルリストは、対象レベル-1のindexを持つ */
    const getExpList = (currentLevel, targetLevel) => {
        return (EXPERIENCE_LIST.slice(currentLevel - 1, targetLevel));
    }

    // console.log("-------------------");
    // console.log('expList', needExp);
    // console.log('expList', expList);
    // console.log("-------------------");


    // 必要経験値/経験値リストを更新する関数
    const updateNeedExp = (currentLevel, targetLevel, expTypeRate) => {
        const exp = expTypeRate * calculatorNeedExp(getExpList(currentLevel + 1, targetLevel));
        _setExpList(addDiffAccum(getExpList(currentLevel, targetLevel)))
        _setNeedExp(exp);
    }



    return [needExp, expList, updateNeedExp];
}

///// レベル毎にターゲットレベルからの累積経験値を計算し付与する
const addDiffAccum = (data) => (data.reduce((acc, cur, i) => {
    if (i === 0) return [{ ...cur, diffAccum: 0 }];
    return [...acc, { ...cur, diffAccum: (acc[i - 1].diffAccum + cur.exp) }];
}, []));



// 倍率補正経験値計算カスタムコンポーネント
export const useAcquireExp = () => {
    // 一日辺りの指定獲得睡眠EXP
    const [sleepExp, setSleepExp] = useState(100);
    // 性格補正(0.8, 1, 1.2)のいずれかの値を保持する。
    const [personality, setPersonality] = useState(1);
    // 投入アメ数
    const [usageCandy, setUsageCandy] = useState(0);
    // 睡眠EXPボーナス数
    const [sleepExpBonus, setSleepExpBonus] = useState(0);

    // 補正済み睡眠EXP, 補正済み飴経験値
    const sleepExpGain = Math.floor(sleepExp * (1 + sleepExpBonus * SLEEPEXPBONUSRATE) * personality);
    const candyExpGain = Math.floor(usageCandy * CANDYEXP * personality);
    // 設定コンポーネント用ステートオブジェクト
    const subExpStates = {
        sleepExp, setSleepExp,
        personality, setPersonality,
        usageCandy, setUsageCandy,
        sleepExpBonus, setSleepExpBonus,
    }
    return { sleepExpGain, candyExpGain, subExpStates }
}