/**
 * @fileoverview 開発中に設置するモックコンポーネント
 * @module Mockk/Components
 */

// Import React
import { useState, cloneElement } from 'react';
// MUIコンポーネント
import { Button, Typography, Box, Paper } from '@mui/material';
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
     * カウントの状態。
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
 * グリッドアイテムコンポーネント
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