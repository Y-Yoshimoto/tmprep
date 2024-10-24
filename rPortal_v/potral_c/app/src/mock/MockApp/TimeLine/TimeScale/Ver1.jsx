import React, { useState, useEffect } from 'react';
import { Stage, Layer, Text, Line } from 'react-konva';

const TimeScale = ({ interval = 10 }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const getTimeText = (minutesOffset) => {
        const newTime = new Date(time.getTime() + minutesOffset * 60000);
        return newTime.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <Stage width={window.innerWidth} height={100}>
            <Layer>
                {Array.from({ length: Math.floor(120 / interval) + 1 }, (_, i) => i - Math.floor(60 / interval)).map((offset) => (
                    <>
                        <Line
                            key={offset}
                            points={[window.innerWidth / 2 + offset * 20, 50, window.innerWidth / 2 + offset * 20, 70]}
                            stroke="black"
                            strokeWidth={1}
                        />
                        <Text
                            x={window.innerWidth / 2 + offset * 20}
                            y={70}
                            text={getTimeText(offset * interval)}
                            fontSize={15}
                            align="center"
                            offsetX={7.5}
                        />
                    </>
                ))}
            </Layer>
        </Stage>
    );
};

export default TimeScale;