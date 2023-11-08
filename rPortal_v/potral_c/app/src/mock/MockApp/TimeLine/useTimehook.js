import { useState, useEffect, useRef } from 'react';

// 時刻管理カスタムフック
export const useTime = (props) => {
    const [startTime, setStartTime] = useState(new Date()); // 開始時刻
    const [showTime, setShowTime] = useState(new Date());   // 表示時刻
    const deltaTimeRef = useRef(new Date() - startTime);    // 開始時刻と実時間の差分

    // 開始時刻と表示時刻を再設定する
    const setTime = (newTime) => {
        // 更新用の時刻差分を設定
        deltaTimeRef.current = new Date() - newTime;
        // 開始時刻/表示時刻を更新
        setStartTime(newTime);
        setShowTime(newTime);
    }
    // 開始時刻分の差分から更新時刻を算出する
    const deltaTime = () => new Date(new Date().getTime() - deltaTimeRef.current);

    // 表示時刻を更新する
    const updateShowTime = () => setShowTime(deltaTime());

    // 更新用の差分時刻を再計算し更新タイマーを生成する
    const generateUpdateShowTime = () => {
        deltaTimeRef.current = new Date() - startTime;
        return updateShowTime;
    }

    return { startTime, setTime, showTime, generateUpdateShowTime };

}

export default useTime;