// 拡大縮小コンポーネント
//Reactコンポーネント
import { useState, useRef } from 'react';

// 再生領域のスタイル
const AREASTYLE = { overflow: 'clip', backgroundColor: '#000000', border: '1px solid black' };
// 最小値と最大値の範囲制限
const calcLimitValue = (min, max) => (value) => Math.min(max, Math.max(min, value));

// ズームテストコンポーネント
// 固定の表示領域に対して、内部のコンテンツ(children)を拡大縮小するコンポーネント
// 内部コンテンツの左上を基準に拡大縮小し、その位置を動かすことでズーム機能として動作する
// @param {number} size.x - 表示領域の幅(動画の最小横幅サイズ)
// @param {number} size.y - 表示領域の高さ(動画の最小縦幅サイズ)
// @param {number} maxScale - 最大拡大率
// @param {number} zoomRate - ズーム率
// @param {boolean} debug - デバッグ表示の有無
// @ param {JSX.Element} children - 子要素
// @returns {JSX.Element} - ズームテストコンポーネント
export const CSSZoomComponent = ({ size = { x: 640, y: 360 }, maxScale = 5, zoomRate = 0.002, debug = false, children }) => {
    // 表示Windowサイズ取得用
    const boxRef = useRef(null);
    const boxBaseStyle = { width: size.x, height: size.y, ...AREASTYLE };
    // 表示領域の画面上の位置
    const offset = {
        x: boxRef.current ? boxRef.current.offsetLeft : 0,
        y: boxRef.current ? boxRef.current.offsetTop : 0
    };

    // 拡大率ステート
    const [scale, setScale] = useState(1);
    const calcLimitScale = calcLimitValue(1, maxScale);
    const videoWidth = size.x * scale;

    // 表示位置設定
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const minPosition = { x: -size.x * (scale - 1), y: -size.y * (scale - 1) };

    // ズーム操作(スクロール)
    const onwheel = (e) => {
        // 標準のスクロールを無効化
        //e.preventDefault();
        // 拡大率の計算
        const newScale = calcLimitScale(scale + (e.deltaY * zoomRate));
        // クリック位置を基準にズーム 座標計算
        const _tmp_newScale = (newScale - 1);
        const point = { x: e.clientX - offset.x, y: e.clientY - offset.y };
        const newPosition = { x: -(point.x * _tmp_newScale), y: -(point.y * _tmp_newScale) };
        // 最小値の計算(表示領域のサイズに対するズーム後のサイズ)
        const _minPosition = { x: -(size.x * _tmp_newScale), y: -(size.y * _tmp_newScale) };
        // ステート更新
        setScale(newScale);
        setPosition({
            x: calcLimitValue(_minPosition.x, 0)(newPosition.x),
            y: calcLimitValue(_minPosition.y, 0)(newPosition.y)
        })
    };

    // 並行移動操作(ドラッグ)
    const onMouseMove = (e) => {
        // マウスボタンが押されていない場合は処理しない
        if (e.buttons === 0) return;
        // マウス移動時の座標計算とステート更新
        setPosition({
            x: calcLimitValue(minPosition.x, 0)(position.x + e.movementX),
            y: calcLimitValue(minPosition.y, 0)(position.y + e.movementY)
        });
    };

    return (
        <>
            <div ref={boxRef}
                onWheel={onwheel}
                onMouseMove={onMouseMove}
                style={{ ...boxBaseStyle, ...AREASTYLE }}>
                <div style={{ position: 'relative', top: position.y, left: position.x, width: videoWidth, pointerEvents: 'none' }}>
                    {children}
                </div>
            </div>
            {/* デバッグ表示 */}
            {debug &&
                <div style={{ margin: '16px 0', display: 'block', position: 'fixed', top: 32, left: 32, background: '#FFFF00DD', padding: 16 }}>
                    <button onClick={() => { setScale(1); setPosition({ x: 0, y: 0 }); }}>Reset</button>
                    <div> {`x: ${position.x.toFixed(3)}`} </div>
                    <div> {`y: ${position.y.toFixed(3)}`} </div>
                    <div> {`scale: ${scale.toFixed(3)}`} </div>
                </div>
            }
        </>
    )

};

// ズーム処理途中計算
// ズームの中心位置(スクロール時のカーソル位置)
// const point = { x: e.clientX - offset.x, y: e.clientY - offset.y };
// // ズームの中心位置の比率
// const resio = { x: point.x / size.x, y: point.y / size.y };
// // 拡大後の動画のサイズ
// const videoSize = { width: size.x * scale, height: size.y * scale };
// // カーソル位置の拡大動画上での座標
// const scalePoint = { x: resio.x * videoSize.width, y: resio.y * videoSize.height };
// // ズーム後の動画の設置位置
// const newPosition = { x: -(scalePoint.x - point.x), y: -(scalePoint.y - point.y) };
// ↓最適化1
// const newPosition_S = {
//     x: -(((point.x / size.x) * (size.x * scale)) - point.x),
//     y: -(((point.y / size.y) * (size.y * scale)) - point.y)
// }
// ↓最適化2
// const newPosition = { x: -(point.x * (scale - 1)), y: -(point.y * (scale - 1)) };