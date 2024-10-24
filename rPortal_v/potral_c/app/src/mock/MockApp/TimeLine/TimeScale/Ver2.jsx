import React, { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';
import dayjs from 'dayjs';

const TimeRuler = ({ centerTime }) => {
    const stageWidth = 800;
    const centerPosition = stageWidth / 2; // calculate center position


    centerTime = centerTime || new Date();
    const start = dayjs(centerTime).subtract(2, 'hours');
    const end = dayjs(centerTime).add(2, 'hours');
    const duration = end.diff(start, 'minute');

    const ticks = [];
    for (let i = 0; i <= duration; i++) {
        const time = dayjs(start).add(i, 'minutes');
        const x = i * 10; // adjust this to change scale spacing

        let color = 'black';
        let width = 10;
        if (time.minute() % 10 === 0) {
            // major tick every 10 minutes
            color = 'red';
            width = 30;
            ticks.push(<Text text={time.format('HH:mm')} x={x} y={5} />);
        }

        ticks.push(<Line points={[x, 0, x, width]} stroke={color} />);
    }

    // Add a line at the center position
    ticks.push(<Line points={[centerPosition, 0, centerPosition, window.innerHeight]} stroke="blue" />);


    return (
        <div>
            <Stage width={stageWidth} height={100}>
                <Layer>{ticks}</Layer>
            </Stage>
        </div>
    );
};

export default TimeRuler;