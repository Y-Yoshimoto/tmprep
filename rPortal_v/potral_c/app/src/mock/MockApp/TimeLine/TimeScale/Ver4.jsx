import React, { useRef, useLayoutEffect, useState, useCallback } from 'react';
import { Box } from '@mui/material';
import { Stage, Layer, Line, Text } from 'react-konva';
import dayjs from 'dayjs';

const ONEHOUR = 60 * 60 * 1000;

const TimeRuler = ({ centerTime }) => {
    // 操作中の表示時刻
    const [tmpTime, setTmpTime] = useState(centerTime);

    // コンポーネントの横幅を取得するカスタムフック
    const { compWidth, compWidthRef, getCompWidth_X } = useCompWidth();
    // 中心相対座標定数
    const centerPosition = compWidth * 0.5;
    // 全体の幅
    const wideCompWidth = compWidth * 2;

    // 中心時刻
    centerTime = centerTime || new Date();

    // 前後1時間の範囲を表示する
    const leftEndUnix = centerTime.getTime() - ONEHOUR;
    // 選択肢した座標の時刻
    const selectTime = (x) => {
        return leftEndUnix + x * (ONEHOUR / centerPosition);
    };
    const inverseSelectTime = (time) => {
        return (time - leftEndUnix) / (ONEHOUR / centerPosition);
    };

    const start = dayjs(centerTime).subtract(1, 'hours');
    const end = dayjs(centerTime).add(1, 'hours');
    const duration = end.diff(start, 'minute');
    // 1分あたりのピクセル数
    const delta = compWidth / duration;
    const ticks = [];
    for (let i = 0; i <= duration; i++) {
        const time = dayjs(start).add(i, 'minutes');
        //console.log(`time=${time.format('HH:mm:ss')}`);
        const x = i * delta;// 5; // adjust this to change scale spacing

        let color = 'black';
        let width = 10;
        if (time.minute() % 10 === 0) {
            // major tick every 10 minutes
            color = 'red';
            width = 30;
            const text = time.format('HH:mm');
            ticks.push(<Text fontSize={16} key={`Text_${i}`} text={text} x={x} y={35} align='center' offsetX={text.length * 4} />);
        }

        ticks.push(<Line key={`Line_${i}`} points={[x, 0, x, width]} stroke={color} />);
    }
    // Add a line at the center position
    ticks.push(<Line key={"Line_Center"} points={[centerPosition, 0, centerPosition, 60]} stroke="blue" />);
    const text = dayjs(centerTime).format('HH:mm:ss');
    //const text = centerTime.format('HH:mm');
    ticks.push(<Text fontSize={20} key={`Text_Center`} text={text} x={centerPosition} y={65} align='center' offsetX={text.length * 4.8} />);


    // クリック
    const handleClick = (e) => {
        const x = getCompWidth_X(e.evt.clientX);
        const clickedTime = new Date(selectTime(x));
        console.log(`Clicked at x=${x}, time=${clickedTime.toLocaleString()}`);
    };

    const handleDragStart = (e) => {
        console.log(`Drag started at x: ${e.target.x()}, y: ${e.target.y()}`);
    }

    const handleDragMove = (e) => {
        console.log(`Dragging at x: ${e.target.x()}, y: ${e.target.y()}`);
    }

    const handleDragEnd = (e) => {
        console.log(`Drag ended at x: ${e.target.x()}, y: ${e.target.y()}`);
    }


    return (
        <Box className={"A"} ref={compWidthRef}>
            <Stage
                width={compWidth}
                height={100}
                onClick={handleClick}
                onDragStart={handleDragStart}
                onDragMove={handleDragMove}
                onDragEnd={handleDragEnd}
            >
                <Layer>{ticks}</Layer>
            </Stage>
        </Box>
    );
};

export default TimeRuler;


/** コンポーネントの横幅を取得するカスタムフック
 * @function useCompWidth
 * @returns {Object} 
 *  compWidth: コンポーネントの横幅, 
 *  compWidthRef: コンポーネントの横幅を取得するためのref
*/
const useCompWidth = () => {
    // コンポーネントの横幅ステート
    const [compWidth, setCompWidth] = useState(0);
    // コンポーネントの左端の座標ステート
    const [compLeft, setCompLeft] = useState(0);
    // コンポーネントの横幅を取得するためのref
    const compWidthRef = useRef();
    // コンポーネント内部の相対座標を取得する
    const getCompWidth_X = useCallback((x) => {
        return x - compLeft;
    }, [compLeft]);

    // コンポーネントの横幅を取得する
    useLayoutEffect(() => {
        const element = compWidthRef.current;
        const observer = new ResizeObserver(() => {
            const comp = element.getBoundingClientRect();
            setCompLeft(comp.left);
            setCompWidth(comp.width);
        })
        // エレメントが存在する場合は監視を開始する
        if (element) { observer.observe(element) }
        // コンポーネントがアンマウントされた場合は監視を停止する
        return () => { if (element) { observer.unobserve(element) } }
    }, []);
    // カスタムフックの戻り値(コンテンツの横幅とコンテンツの横幅を取得するためのref)
    return { compWidth, compWidthRef, getCompWidth_X };
}