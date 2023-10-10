// MUIモックカウンターアプリケーション
//Reactコンポーネント
import { useState } from 'react';
// MUIコンポーネント
import { Button, Box, Container, Card, CardContent, Stack } from '@mui/material';
// モックコンポーネント読み込み
import { MockLayout, MockMessage, MockPaper } from "../../Components";

/**
 * カウンターアプリケーションコンポーネント
 * MUIでデザインをしたクリックした数を表示するカウンターアプリケーション
 * @function
 * @returns {JSX.Element}
 */

export const SimpleCounter_MUI = () => {
    // クリック数を管理するステート
    const [count, setCount] = useState(0);
    // クリック時の処理
    const AddClick = () => setCount(c => c + 1);
    const ResetClick = () => setCount(0);

    return (
        <MockLayout layoutMaginX={0} layoutMaginy={2}>
            <Card sx={{ maxWidth: 275 }}>
                <CardContent>
                    <MockMessage message={`SimpleCounter_MUI`} hSize="h6" />
                    クリック数カウンター MUIデザイン<br />
                    <MockMessage message={count} hSize="h6" />
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={AddClick}>カウントアップ</Button>
                        <Button variant="contained" onClick={ResetClick}>リセット</Button>
                    </Stack>
                </CardContent>
            </Card>
        </MockLayout>
    )

};