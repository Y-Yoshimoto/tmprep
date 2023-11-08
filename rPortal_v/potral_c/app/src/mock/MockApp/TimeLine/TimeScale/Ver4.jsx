import React, { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';
import dayjs from 'dayjs';

const TimeRuler = ({ centerTime }) => {
    const stageWidth = 800;
    const centerPosition = stageWidth / 2; // calculate center position


    centerTime = centerTime || new Date();
    // 前後1時間の範囲を表示する
    const start = dayjs(centerTime).subtract(1, 'hours');
    const end = dayjs(centerTime).add(1, 'hours');
    const duration = end.diff(start, 'minute');

    const delta = stageWidth / duration;

    //console.log(`start=${start.format('HH:mm:ss')}, end=${end.format('HH:mm:ss')}, duration=${duration}`);

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
    console.log(`xMax=${duration * 5}`);

    // Add a line at the center position
    ticks.push(<Line key={"Center"} points={[centerPosition, 0, centerPosition, 80]} stroke="blue" />);

    const handleClick = (e) => {
        const x = e.evt.layerX;
        const minutesFromStart = x / 10; // reverse the scale spacing calculation
        const clickedTime = dayjs(start).add(minutesFromStart, 'minutes');
        console.log(`Clicked at x=${x}, time=${clickedTime.format('HH:mm')}`);
    };

    return (
        <div>
            <Stage width={stageWidth} height={100} onClick={handleClick}>
                <Layer>{ticks}</Layer>
            </Stage>
        </div>
    );
};

export default TimeRuler;