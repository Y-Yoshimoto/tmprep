
import { useState } from 'react';
// リストステート
import { useList } from 'react-use';

// MUI コンポーネント
import { Box, Divider, Container } from '@mui/material';

// 選択肢コンポーネント
import { SelectedItems } from './SelectedItems';
// 配置コンポーネント
import { ArrangementItems } from './ArrangementItems';
// 結果表示コンポーネント
import { ShowResult } from './ShowResult';

// モックコンポーネント
import { MockLayout, MockMessage } from '../../Components';

export const SelectGridMenu = () => {
    // リスト生成関数
    const ListSize = 3;
    const makeList = (length) => Array.from({ length }, () => "");
    // 献立リスト
    const [mealsMenus, { updateAt }] = useList(makeList(ListSize));
    // 更新対象フォーカス値
    const [forcasIndex, setForcasIndex] = useState(0);
    console.log("forcasIndex", forcasIndex);

    // ドラッグデータリストの更新関数
    const wrapSetmealsMenus = index => data => {
        console.log("index", index);
        if (index >= ListSize) return;
        updateAt(index, data); // メニューリストの更新
        setForcasIndex(() => index + 1); // フォーカス値の更新
    }

    // メニューのクリア
    const clearMenus = (index) => {
        updateAt(index, ""); //指定したメニューのクリア
    }

    return (
        <>
            <MockMessage message={"食材量計算"} />
            <ArrangementItems mealsMenus={mealsMenus} forcasIndex={forcasIndex} setForcasIndex={setForcasIndex} clearMenus={clearMenus} />

            <Divider />
            <ShowResult mealsMenus={mealsMenus} />

            <Divider />
            <SelectedItems wrapSetmealsMenus={wrapSetmealsMenus(forcasIndex)} />
        </>
    );
}

export default SelectGridMenu;



