// インポート
import { useEffect, useState } from "react";
import { Box, Button } from '@mui/material';

// カスタムフック読み込み
import useTime from './useTimehook';
// 時刻切り替えボタン
import { DateTimePicker_C } from './DateTimePicker_C';
// タイムスケール
import TimeScale from './TimeScale/Ver4';


// タイムライン表示コンポーネント
export const TimeLine = (props) => {
    // タイムラインコンポーネントのステート
    const { setTime, showTime, generateUpdateShowTime } = useTime();
    // タイマー動作制御
    const [run, setRun] = useState(true);

    // 表示時刻を毎秒更新する
    useEffect(() => {
        if (!run) {
            return
        } else {
            const updateShowTime = generateUpdateShowTime();
            const timer = setInterval(updateShowTime, 1000);
            return () => clearInterval(timer);
        }
    }, [run]);

    return (
        <>
            <div>TimeLine</div>
            <Layoutter>
                <Box>
                    {/* 時刻設定ボタン */}
                    <DateTimePicker_C showTime={showTime} setTime={setTime} />
                    {/* タイマ動作ボタン */}
                    <Button variant="outlined"
                        onClick={() => setRun(!run)}>{run ? 'Stop' : 'Start'}</Button>
                </Box>
                {showTime.toLocaleString()}
                <TimeScale centerTime={showTime} />
            </Layoutter>
        </>
    );
}

// 主コンポーネントのレイアウター
const Layoutter = ({ children }) => {
    return (
        <Box sx={{
            //backgroundColor: 'tertiary.superlight',
            border: '1px solid',
            borderRadius: '6px',
            borderColor: 'secondary.main',
            width: '90%',
            margin: 'auto',
        }}>
            {children}
        </Box>
    );
}

