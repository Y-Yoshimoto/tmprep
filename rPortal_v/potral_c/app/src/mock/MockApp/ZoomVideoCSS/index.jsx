// モックカウンターアプリケーション
//Reactコンポーネント
import { useState } from 'react';
// MUIコンポーネント
import { Button, Box, Container, Card, CardContent, Stack } from '@mui/material';
// モックコンポーネント読み込み
import { MockLayout, MockMessage, MockPaper } from "../../Components";

// カウンターアプリケーションの読み込み
import { ZoomTest } from "./ZoomTest";
/**
 * カウンターアプリケーションズ
 * カウンターアプリケーションを並べて表示するコンポーネント
 * @function
 * @returns {JSX.Element}
 */
export const ZoomVideoCSS = () => {
    return (
        <MockLayout>
            <ZoomTest />
        </MockLayout>
    )
};
export default ZoomVideoCSS;