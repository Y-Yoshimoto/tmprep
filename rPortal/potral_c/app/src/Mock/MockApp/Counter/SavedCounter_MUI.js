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
 * クリック回数はローカルストレージに保存され、リロードしても保持される
 * @function
 * @returns {JSX.Element}
 */

export const SavedCounter_MUI = () => {
    // クリック数を管理するステート
    const [count, setCount] = useLocalStorageState({ key: "count", initValue: 0 });
    // クリック時の処理
    const AddClick = () => setCount(count + 1);
    const ResetClick = () => setCount(0);

    return (
        <MockLayout layoutMaginX={0} layoutMaginy={2}>
            <Card sx={{ maxWidth: 275 }}>
                <CardContent>
                    <MockMessage message={`SavedCounter_MUI`} hSize="h6" />
                    クリック数保存カウンター<br />
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


/**ローカルストレージと状態が連動するカスタムフック(オブジェクト対応版)
 * 状態変えると値がローカルストレージに保存される
 * @function
 * @param {string} key - ローカルストレージのキー
//  * @param {string} initValue - ローカルストレージの値が無い場合の初期値
 * @returns {JSX.Element}
 */
function useLocalStorageState({ key, initValue = "" }) {
    // ローカルストレージ読み込み関数
    const _loadLocalStorage = (key, initValue) => JSON.parse(localStorage.getItem(key)) ?? initValue;
    // ローカルストレージ書き込み関数
    const _saveLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value, undefined, 1));

    //ステート定義
    const [value, setValue] = useState(_loadLocalStorage(key, initValue));
    // ディスパッチ関数定義
    const setLocalStorageState = (newValue) => {
        setValue(newValue);
        _saveLocalStorage(key, newValue);
    };
    return [value, setLocalStorageState];
};