/**
 * @fileoverview 開発中に設置するモックコンポーネント
 * @module Mockk/Components
 */

// Import React
import { useState, cloneElement } from 'react';
// MUIコンポーネント
import { Button, Typography, Box, Paper, Container, Modal } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'

/**
 * モックメッセージコンポーネント
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {string} props.message - 表示するメッセージ
 * @param {string} [props.hSize='body'] - 表示するメッセージのヘッダーサイズ
 * @returns {JSX.Element} - メッセージを表示するコンポーネント
 */
export const MockMessage = ({ message, hSize = 'body' }) => {
    return (
        <Typography variant={hSize} gutterBottom>
            {message}
        </Typography>
    );
};

/**
 * モックボタンコンポーネント。
 * クリックすると状態が変わるモックボタン
 *
 * @param {Object} props - コンポーネントのプロパティ。
 * @param {number} [props.initialCount=0] - 初期カウント値。
 * @returns {JSX.Element} - クリックするとカウントを増やしそれを表示するボタン
 */
export const MockButton = ({ initialCount = 0 }) => {
    /**
     * カウントアップ機能付きボタン
     *
     * @type {[number, function]}
     */
    const [count, setCount] = useState(initialCount);

    return (
        <Button variant="contained" onClick={() => { setCount(count + 1); }}>
            {`Count: ${count}`}
        </Button>
    );
};

/**
 * モックボックスコンポーネント
 * @param {Object} props - コンポーネントのプロパティ
 * @param {JSX.Element} props.children - 子要素
 * @returns {JSX.Element} - ボックスコンポーネント
 */
export const MockBox = ({ children }) => {
    return (
        <Box sx={{ color: 'text.primary', backgroundColor: 'primary.main', }}>
            {children}
        </Box>
    );
};

/**
 * モックレイアウト表示コンポーネント
 * @param {Object} props - コンポーネントのプロパティ
 * @param {JSX.Element} props.children - 子要素
 * @returns {JSX.Element} - ボックスコンポーネント
 */
export const MockLayoutBox = ({ children }) => {
    return (
        <Box sx={{
            width: "100%",//`calc(100% + ${DRAWER_WIDTH}px)`,//300,
            height: "100%", //300,
            bgcolor: 'primary.light',
            border: 8,
            borderColor: 'secondary.main'
        }}>
            {children}
        </Box>
    );
};

/**
 * モックペーパーコンポーネント
 * @param {Object} props - コンポーネントのプロパティ
 * @param {JSX.Element} props.children - 子要素
 * @returns {JSX.Element} - ペーパーコンポーネント
 */
export const MockPaper = ({ children }) => {
    return (
        <Paper elevation={3}>
            {children}
        </Paper>
    );
};

/**
 * モックグリッドコンポーネント
 * @param {Object} props - コンポーネントのプロパティ
 * @param {JSX.Element} props.children - 子要素
 * @returns {JSX.Element} - グリッドコンポーネント
 */
export const MockGrid = ({ children = <></>, items = Array(6) }) => {
    return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
            {Array.from(items).map((item, index) => (
                <Grid xs={2} sm={4} md={4} key={index}>
                    <MockPaper>
                        {item}
                        {/*cloneElement(children, { message: item })*/}
                    </MockPaper>
                </Grid>
            ))}
        </Grid>
    );
};

/**
 * モックモーダルコンポーネント
 * @param {Object} props - コンポーネントのプロパティ
 * @param {JSX.Element} props.children - 子要素
 * @returns {JSX.Element} - グリッドコンポーネント
 */
export const MockModal = ({ buttonLabel = "Open modal", message = `Modal Item` }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // モーダルの表示スタイル
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        maxWidth: '90%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    //モーダルの表示内容
    return (
        <>
            <Button variant="contained" onClick={handleOpen}>{buttonLabel}</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <MockMessage message={message} />
                </Box>
            </Modal></>
    );
};

/**
 * モックグリッドアイテムコンポーネント
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {number} props.index - アイテムのインデックス
 * @returns {JSX.Element} - グリッドアイテムとして表示するコンポーネント
 */
export const GridItem = ({ index }) => {
    return (
        <>
            <MockMessage message={`Item: ${index}`} />
            <MockMessage message={`${index}`} hSize="h4" />
        </>
    )
};

/**
 * モック全体レイアウトコンポーネント
 * 
 * @param {Object} props - コンポーネントのプロパティ
 * @param {JSX.Element} props.children - 子要素
 * @param {number} [props.layoutMaginX=2] - レイアウトの横方向のマージン
 * @param {number} [props.layoutMaginY=4] - レイアウトの縦方向のマージン
 * @param {string} [props.maxWidth='md'] - レイアウトの最大幅
 * {xs: 0px, sm: 600px, md: 960px, lg: 1280px, xl: 1920px}
*/
export const MockLayout = ({ children, layoutMaginX = 2, layoutMaginY = 4, maxWidth = 'md' }) => {
    return (<Container maxWidth={maxWidth}>
        <Box sx={{ mx: layoutMaginX, my: layoutMaginY }}>
            {children}
        </Box>
    </Container>)
};
