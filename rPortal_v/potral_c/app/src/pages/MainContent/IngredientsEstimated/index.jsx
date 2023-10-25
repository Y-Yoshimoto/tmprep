
import { useState } from 'react';
// リストステート
import { useList } from 'react-use';
// MUI テーマステート
import { useTheme } from '@mui/material/styles';

// MUI コンポーネント
import { Box, Divider, Container, AppBar, Toolbar } from '@mui/material';

// 選択肢コンポーネント
import { SelectedItems } from './SelectedItems';
// 配置コンポーネント
import { ArrangementItems } from './ArrangementItems';
// 結果表示コンポーネント
import { ShowResult } from './ShowResult';

// モックコンポーネント
import { MockLayout, MockMessage } from '@/mock//Components';

export const IngredientsEstimated = () => {
    // 献立リスト
    const ListSize = 3;
    const [mealsMenus, { updateAt }] = useList(Array(ListSize).fill(""));
    // 更新対象フォーカス値
    const [forcasIndex, setForcasIndex] = useState(0);
    //console.log("forcasIndex", forcasIndex);

    // メニュー追加とフォーカス値の更新関数
    const wrapSetmealsMenus = index => data => {
        //console.log("index", index);
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
            {/* タブレット以上ではリストを先に表示/モバイルではリストを後に表示 */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
                <SelectedItems wrapSetmealsMenus={wrapSetmealsMenus(forcasIndex)} />
                <Box >
                    <ArrangementItems mealsMenus={mealsMenus} forcasIndex={forcasIndex} setForcasIndex={setForcasIndex} clearMenus={clearMenus} />
                    {/*<Divider />*/}

                    <ShowResult mealsMenus={mealsMenus} />
                </Box>
            </Box>
        </>
    );
}

export default IngredientsEstimated;


/// 未使用コードメモ
// リスト生成関数
//const ListSize = 3;
//const makeList = (length) => Array.from({ length }, () => "");
// <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//     <SelectedItems wrapSetmealsMenus={wrapSetmealsMenus(forcasIndex)} />
// </Box>