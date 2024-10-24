/*
    レベル毎の必要経験値, 累積経験値のリストから日数毎のレベルを計算する
    日数, 日付, レベル(レベル毎の経験値データ) のリストを返す
    リターン値の例
    return [
        {
            date: Fri Dec 29 2023 00:00:00 GMT+0900 (日本標準時), // Date型
            day: 0,
            getExp: 120,
            diffAccum: 244,
            exp: 244,
            level: 8,
            totalAccum: 971
        }, ...
    ]
*/

// 日付毎のレベルを計算する
export const calculationDateAndLevel = (props) => {
    const { needExp, expList, sleepExpGain, candyExpGain } = props;
    //// findで探すため累積経験値のリストを逆順にする
    const expListRevers = expList.toReversed();
    //// 必要日数を計算
    const needDay = Math.ceil((needExp - candyExpGain) / sleepExpGain);
    //// 日数毎の累積獲得経験値を計算する関数を作成
    const comparisonValuePartial = (day) => ((day * sleepExpGain) + candyExpGain);

    //// 日数, 日付毎のレベルを計算する
    return [...Array(needDay + 1).keys()]
        .map((day) => ({
            day,
            date: addDayDate(new Date(), day),
            getExp: comparisonValuePartial(day),
            ...dayAndLevel(expListRevers, comparisonValuePartial(day))
        }));
}
// 日数毎の到達レベルを計算する
const dayAndLevel = (expListRevers, comparisonValue) => (
    expListRevers.find((d) => (d.diffAccum < comparisonValue)) ?? lastList(expListRevers)
);
// 現在の日付から指定日数後の日付を返す
const addDayDate = (initDate, days) => {
    return new Date(initDate.getFullYear(), initDate.getMonth(), initDate.getDate() + days);
}
// リストの最後の値を取得する
export const lastList = (list) => list[list.length - 1];

export default calculationDateAndLevel;