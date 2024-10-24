// モックカウンターアプリケーション
//Reactコンポーネント
import { useState, useRef } from 'react';

import { Box, Button } from '@mui/material';
/**
 * カウンターアプリケーションコンポーネント
 * クリックした数を表示するカウンターアプリケーション
 * @function
 * @returns {JSX.Element}
 */

export const ZoomTest = () => {
    // 表示Window
    const boxRef = useRef(null);
    const boxBaseStyle = { width: 640, height: 360, border: '1px solid black' };
    // https://download.samplelib.com/mp4/sample-5s.mp4
    // https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8

    const addBoxStyle = { overflow: 'clip', backgroundColor: '#FF0000AA' };

    // 拡大縮小の設定
    const minVideoWidth = 640;
    const minVideoHeight = minVideoWidth / 16 * 9;
    const maxScale = 5;
    const [videoWidth, setVideoWidth] = useState(640);
    const getLimitWidth = (newWidth) => Math.min(minVideoWidth * maxScale, Math.max(minVideoWidth, newWidth));
    const scale = (videoWidth / minVideoWidth);
    // 表示位置設定
    const [position, _setPosition] = useState({ x: 0, y: 0 });
    const minPosition = { x: -minVideoWidth * (scale - 1), y: -minVideoHeight * (scale - 1) };

    const offsetX = boxRef.current ? boxRef.current.offsetLeft : 0;
    const offsetY = boxRef.current ? boxRef.current.offsetTop : 0;
    // 位置調整
    const setPosition = (newPosition) => {
        _setPosition({ x: Math.min(0, Math.max(minPosition.x, newPosition.x)), y: Math.min(0, Math.max(minPosition.y, newPosition.y)) });
    };
    console.log(position);

    // スクロールイベント
    const onwheel = (e) => {
        // 標準のスクロールを無効化
        //e.preventDefault();
        const newWidth = getLimitWidth(videoWidth + (e.deltaY > 0 ? -100 : 100));
        setVideoWidth(newWidth);
        const scale = newWidth / minVideoWidth;
        const minPosition = { x: -minVideoWidth * (scale - 1), y: -minVideoHeight * (scale - 1) };
        // センターを基準にズーム
        // console.log('--------------');
        // console.log(e.clientX - offsetX, e.clientY - offsetY);
        // console.log(minVideoWidth / scale, minVideoHeight / scale);
        const wheelPosition = {
            x: -((e.clientX * scale - offsetX) - minVideoWidth / 2),
            y: -((e.clientY * scale - offsetY) - minVideoHeight / 2)
        };
        //console.log(wheelPosition);
        setPosition({ x: Math.max(minPosition.x, wheelPosition.x), y: Math.max(minPosition.y, wheelPosition.y) });
    };




    const onMouseMove = (e) => {
        if (e.buttons === 0) return;
        setPosition({ x: position.x + e.movementX, y: position.y + e.movementY });
    };

    return (
        <>
            <div ref={boxRef}
                onWheel={onwheel}
                onMouseMove={onMouseMove}
            >
                <Box sx={{ ...boxBaseStyle, ...addBoxStyle }}>
                    <Box sx={{ position: 'relative', top: position.y, left: position.x }}>
                        <video src='https://download.samplelib.com/mp4/sample-5s.mp4' width={videoWidth} controls loop muted style={{ pointerEvents: 'none' }} />
                    </Box>
                </Box >
            </div >
            <h2> ZoomTest </h2>
            <Box>
                <Button onClick={() => { setVideoWidth(minVideoWidth); setPosition({ x: 0, y: 0 }); }}>Reset</Button>
                <Button onClick={() => (setPosition({ x: (position.x + 50), y: position.y }))}>X +</Button>
                <Button onClick={() => (setPosition({ x: (position.x - 50), y: position.y }))}>X -</Button>
                <Button onClick={() => (setPosition({ x: position.x, y: (position.y + 50) }))}>Y +</Button>
                <Button onClick={() => (setPosition({ x: position.x, y: (position.y - 50) }))}>Y -</Button>
            </Box>
        </>
    )

};