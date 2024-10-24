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
            <ChangeScreenModal buttonLabel="モーダルを開く" text={text} setText={setText} />

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
    // 遷移元ページから渡された値を取得
    const location = useLocation();
    const textvalue = location.state ? location.state.value : "";
    const [text, setText] = useState(textvalue);

    // ページ遷移用フック/イベントハンドラ
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("戻る");
        navigate("../changescreen", { state: { value: `${text}` } });
    };

    // ブラウザバック操作時のイベントハンドラ
    const handlePopstate = (event) => {
        console.log("ブラウザバック");
        event.preventDefault();
        handleClick();
    }

    // ブラウザバック操作時のイベントハンドラ
    // ブラウザバック時の処理を中断して戻るボタンを押した時の処理を実行する
    useEffect(() => {
        history.pushState(null, null, location.href);
        window.addEventListener("popstate", handlePopstate);
        return () => {
            window.removeEventListener("popstate", handlePopstate);
        }
    }, [])


    return (
        <MockLayout>
            <h1>  切り替え後ページ  </h1>
            <Button onClick={handleClick} variant="contained">戻る</Button>
            <h3>引き渡された文字列</h3>
            <TextField label="戻りパラメータ" value={text} onChange={(event) => setText(event.target.value)} />
        </MockLayout>
    )
};

/**
 * 全画面モーダルサンプルページ
 * @function
 * @returns {JSX.Element}
 */
export const ChangeScreenModal = ({ buttonLabel, text, setText }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    // モーダルの表示スタイル
    const style = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',

    };

    // モーダルを閉じるイベントハンドラ
    const handleClose = () => {
        console.log("閉じる");
        setOpen(false);
    };


    // ブラウザバック操作時のイベントハンドラ
    const handlePopstate = (event) => {
        console.log("ブラウザバック");
        event.preventDefault();
        handleClose();
        history.pushState(null, null, location.href);
    }


    // ブラウザバック操作時のイベントハンドラ
    // ブラウザバック時の処理を中断して戻るボタンを押した時の処理を実行する
    useEffect(() => {
        if (open) {
            window.addEventListener("popstate", handlePopstate);
        }
        return () => {
            window.removeEventListener("popstate", handlePopstate);
        };
    }, [open]);


    //モーダルの表示内容
    return (
        <>
            <Button variant="contained" onClick={handleOpen}>{buttonLabel}</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <h1>全画面モーダル</h1>
                    <Button variant="contained" onClick={handleClose}>閉じる</Button>
                    <TextField label="戻りパラメータ" value={text} onChange={(event) => setText(event.target.value)} />

                </Box>
            </Modal>
        </>
    );
};

