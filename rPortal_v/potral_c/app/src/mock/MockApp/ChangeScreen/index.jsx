// モックページ切り替えサンプル
//Reactコンポーネント
import { useState, useEffect } from 'react';
// MUIコンポーネント
import { Button, Divider, Box, TextField, Card, CardContent, Modal } from '@mui/material';
// モックコンポーネント読み込み
import { MockLayout, MockButton, MockPaper, MockModal, MockMessage } from "../../Components";
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * ページ切り替えサンプルページ
 * ページ遷移/モーダル表示の各サンプル
 * @function
 * @returns {JSX.Element}
 */
export const ChangeScreen = () => {
    // 入力フィールドフック
    const location = useLocation();
    const textvalue = location.state ? location.state.value : "";
    const [text, setText] = useState(textvalue);

    // ページ遷移用フック/イベントハンドラ
    //// 入力された文字列を次のページに渡す
    const navigate = useNavigate();
    const handleMove = () => {
        navigate("./sub", { state: { value: text } });
    };
    return (
        <MockLayout>
            <h1>  ページ切り替えサンプル  </h1>
            <Divider textAlign="left">文字入力</Divider>
            <TextField label="引渡しパラメータ" value={text} onChange={(event) => setText(event.target.value)} />

            <Divider textAlign="left">モーダル表示</Divider>
            <MockModal buttonLabel="モーダルを開く" message={'テキスト: ' + text} />


            <Divider textAlign="left">全画面モーダル</Divider>
            <ChangeScreenModal buttonLabel="モーダルを開く" message={'テキスト: ' + text} />

            <Divider textAlign="left">ページ遷移</Divider>
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
    console.log("ChangeScreenSub");
    // 遷移元ページから渡された値を取得
    const location = useLocation();
    const text = location.state.value;

    // ページ遷移用フック/イベントハンドラ
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("戻る");
        navigate("../changescreen", { state: { value: `${text}_add` } });
    };

    // ブラウザバック操作時のイベントハンドラ
    // ブラウザバック時の処理を中断して戻るボタンを押した時の処理を実行する
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            console.log("ブラウザバック");
            handleClick();
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return (
        <MockLayout>
            <h1>  切り替え後ページ  </h1>
            <Button onClick={handleClick} variant="contained">戻る</Button>
            <h3>引き渡された文字列</h3>
            {(text)}

        </MockLayout>
    )
};

/**
 * 全画面モーダルサンプルページ
 * @function
 * @returns {JSX.Element}
 */
export const ChangeScreenModal = ({ buttonLabel, message }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        console.log("閉じる");
        setOpen(false);
    };

    // モーダルの表示スタイル
    const style = {
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',

    };

    // ブラウザバック操作時のイベントハンドラ
    // ブラウザバック時の処理を中断して戻るボタンを押した時の処理を実行する
    useEffect(() => {
        console.log("useEffect");
        const handleBeforeUnload = (event) => {
            console.log("ブラウザバック");
            event.preventDefault();
            handleClose();
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);


    //モーダルの表示内容
    return (
        <>
            <Button variant="contained" onClick={handleOpen}>{buttonLabel}</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <MockMessage message={message} /><br />
                    <Button variant="contained" onClick={handleClose}>閉じる</Button>
                </Box>
            </Modal></>
    );
};
