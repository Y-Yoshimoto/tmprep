import { useState } from 'react';
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

export const DragAndDropMenuMock = () => {

    // リスト生成関数
    const makeList = (length) => Array.from({ length }, () => "");
    const ListSize = 3;
    const [DataList, setDataList] = useState(makeList(ListSize)); // ドラッグデータリスト
    // ドラッグデータリストの更新関数
    const wrapSetDataList = index => data => {
        const newList = [...DataList];
        newList[index] = data;
        setDataList(newList);
    }

    return (
        <MockLayout>
            {/*選択肢コンポーネント*/}
            <Box sx={{ display: 'flex' }}>
                <SelectedItems />
                <Box sx={{ flexDirection: 'column' }}>
                    <ArrangementItems wrapSetDataList={wrapSetDataList} />
                    <ShowResult DataList={DataList} />
                </Box>
            </Box>

        </MockLayout>
    );
}

export default DragAndDropMenuMock;



