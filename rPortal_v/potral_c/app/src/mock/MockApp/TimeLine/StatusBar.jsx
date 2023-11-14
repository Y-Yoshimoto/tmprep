//
import { useRef, useEffect, useLayoutEffect, useState, useMemo } from 'react';
import { Box } from "@mui/material";
// Reactキャンバス
import { Stage, Layer, Line, Text, Rect } from 'react-konva';
import Konva from "konva";

// 出力対象コンポーネント
export const StatusBar = ({ status }) => {
    // 描画範囲を可変化するコンポーネント
    const { compSize, compRef } = useFlexibleCanvas();
    // アニメーション外部のサイレンダリングの影響を受けないようにする
    const KonvaComp = useMemo(() => <StatusBarkonva width={compSize.width} gradientColor={statusToColor(status)} />,
        [compSize.width, status]);

    return (
        <div ref={compRef} >
            {KonvaComp}
        </div>
    )
}
// サンプルボタン付きステータスバー
export const StatusBarSample = () => {
    const [status, setStatus] = useState('wait');

    return (
        <>
            <h3> ステータスバーサンプル</h3>
            <div style={{ width: "30%" }}>
                <StatusBar status={status} />
                <button onClick={() => setStatus("ok")}>OK</button>
                <button onClick={() => setStatus("ng")}>NG</button>
                <button onClick={() => setStatus("wait")}>WAIT</button>
            </div>
        </>
    )

}


const statusToColor = (status) => {
    switch (status) {
        case 'ok':
            return [0, 'green', 1, 'blue'];
        case 'ng':
            return [0, 'green', 1, 'yellow'];
        case 'wait':
            return [0, 'yellow', 1, 'red'];
        default:
            return 'gray';
    }

}


const StatusBarkonva = ({ width, gradientColor }) => {
    //const gradientColor = [0, 'red', 1, 'blue'];//[0, 'blue', 1, 'red'],
    const reverseColors = (array) => [array[0], array[3], array[2], array[1]];


    // ステータスバーの高さ
    const height = 6;
    // アニメーション対象Boxのref
    const rectRef = useRef();
    // グラデーションアニメーション設定
    useEffect(() => {
        //const rectNode = ;
        const tween = new Konva.Tween({
            // アニメーション対象の指定
            node: rectRef.current,
            // 変化後の値
            fillLinearGradientColorStops: reverseColors(gradientColor),
            // アニメーション作用時間[s]
            duration: 1,
            // 繰り返し設定
            yoyo: true,
            // アニメーション終了時の処理
            onFinish: () => {
                tween.reverse();
            },
        });

        tween.play();

        return () => {
            tween.destroy();
        };
    }, [JSON.stringify(gradientColor)]);

    return (
        <>
            <Stage width={width} height={height}>
                <Layer>

                    <Rect
                        ref={rectRef}
                        // 描画座標
                        x={0}
                        y={0}
                        // 描画サイズ
                        width={width}
                        height={height}
                        // グラデーション設定
                        //// グラデーションを始点
                        fillLinearGradientStartPoint={{ x: 0, y: 0 }}
                        //// グラデーション終点
                        fillLinearGradientEndPoint={{ x: width, y: 0 }}
                        //// グラデーション色設定
                        fillLinearGradientColorStops={gradientColor} />
                </Layer>
            </Stage>
        </>
    )

}


// コンポーネントの横幅を取得するカスタムフック
const useFlexibleCanvas = () => {
    // サイズ座標保持ステート
    const [compSize, setCompSize] = useState({ x: 0, y: 0, width: 0, height: 0 });
    // 追随するコンポーネントのrefステート
    const compRef = useRef();

    // コンポーネントの横幅を取得する
    useLayoutEffect(() => {
        const element = compRef.current;
        const observer = new ResizeObserver(() => {
            const comp = element.getBoundingClientRect();
            setCompSize({
                x: comp.x, y: comp.y,
                width: comp.width, height: comp.height
            })
        })
        // エレメントが存在する場合は監視を開始する
        if (element) { observer.observe(element) }
        // コンポーネントがアンマウントされた場合は監視を停止する
        return () => { if (element) { observer.unobserve(element) } }
    }, []);
    // カスタムフックの戻り値(コンテンツのサイズ/座標と対象コンテンツ設定するためのref)
    return { compSize, compRef };
}

export default StatusBar;