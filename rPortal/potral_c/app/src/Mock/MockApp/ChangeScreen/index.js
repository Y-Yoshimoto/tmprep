// モックページ切り替えサンプル
//Reactコンポーネント
import { useState } from 'react';
// MUIコンポーネント
import { Button, Box, Container, Card, CardContent, Stack } from '@mui/material';
// モックコンポーネント読み込み
import { MockLayout, MockButton, MockPaper, MockModal } from "../../Components";
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * ページ切り替えサンプルページ
 * ページ遷移/モーダル表示の各サンプル
 * @function
 * @returns {JSX.Element}
 */
export const ChangeScreen = () => {
    // 入力フィールドフック
    const [text, setText] = useState("");

    // ページ遷移用フック/イベントハンドラ
    //// 入力された文字列を次のページに渡す
    const navigate = useNavigate();
    const handleMove = () => {
        navigate("./sub", { state: { value: text } });
    };
    return (
        <MockLayout>
            <h1>  ページ切り替えサンプル  </h1>
            <input value={text} onChange={(event) => setText(event.target.value)} />
            {text}

            <h2> モーダル </h2>
            <MockModal buttonLabel="モーダルを開く" message={'テキスト: ' + text} />
            <h2> ページ遷移 </h2>
            <Button onClick={handleMove} variant="contained">移動</Button>
        </MockLayout>
    )
};


/**
 * ページ切り替え先サンプルページ
 * ページ遷移後のサンプルページ
 * @function
 * @returns {JSX.Element}
 */
export const ChangeScreenSub = () => {
    // 遷移元ページから渡された値を取得
    const location = useLocation();
    const text = location.state.value;
    console.log(text);

    // ページ遷移用フック/イベントハンドラ
    const navigate = useNavigate();
    const handleMove = () => { navigate("../changescreen") };

    return (
        <MockLayout>
            <h1>  ページ切り替え後のサンプルページ  </h1>
            <Button onClick={handleMove} variant="contained">戻る</Button>
            <h3>カウンター</h3>
            <MockButton />
            <h3>遷移元から渡された文字列</h3>
            {(text)}

        </MockLayout>
    )
};