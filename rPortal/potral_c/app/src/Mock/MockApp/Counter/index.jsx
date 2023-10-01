// モックカウンターアプリケーション
//Reactコンポーネント
import { useState } from 'react';
// MUIコンポーネント
import { Button, Box, Container, Card, CardContent, Stack } from '@mui/material';
// モックコンポーネント読み込み
import { MockLayout, MockMessage, MockPaper } from "../../Components";

// カウンターアプリケーションの読み込み
import { SimpleCounter } from "./SimpleCounter";
import { SimpleCounter_MUI } from "./SimpleCounter_MUI";
import { SavedCounter_MUI } from "./SavedCounter_MUI";
/**
 * カウンターアプリケーションズ
 * カウンターアプリケーションを並べて表示するコンポーネント
 * @function
 * @returns {JSX.Element}
 */
export const CounterApps = () => {
    return (
        <MockLayout>
            <SimpleCounter />
            <SimpleCounter_MUI />
            <SavedCounter_MUI />
        </MockLayout>
    )
};