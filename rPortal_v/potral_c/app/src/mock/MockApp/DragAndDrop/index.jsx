import { useState } from 'react';
// MUI コンポーネント
import { Box, Divider } from '@mui/material';


// モックコンポーネント
import { MockLayout, MockMessage } from '../../Components';


export const DragAndDropMock = () => {
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
    console.dir(DataList);

    return (
        <MockLayout>
            <DragBox sendData={"料理1"} />
            <DragBox sendData={"料理2"} />
            <DragBox sendData={"料理3"} />
            <DragBox sendData={"料理4"} />

            <Divider sx={{ margin: 1 }} />
            <DropBox ShowLabel="朝" setUpdata={wrapSetDataList(0)} />
            <DropBox ShowLabel="昼" setUpdata={wrapSetDataList(1)} />
            <DropBox ShowLabel="夜" setUpdata={wrapSetDataList(2)} />

            <Divider sx={{ margin: 1 }} />
            {/*<MockMessage message={DataList[0]} />*/}
            {/* DataListの中身を表示 */}
            {"["}
            {DataList.map((data, index) => (
                <MockMessage key={index} message={data + "   "} />
            ))}{"]"}

        </MockLayout>
    );
}

export default DragAndDropMock;

/// ドラックボックスコンポーネント
const DragBox = ({ children, ...props }) => {
    // ドラック設定データ
    const { sendData } = props;
    const handleDragStart = (e, data) => {
        e.dataTransfer.setData('text/plain', data);
    }

    return (
        <Box sx={{ border: '2px solid red', my: 1, width: 200 }}>
            <div
                onDragStart={(e) => handleDragStart(e, sendData)}
                draggable="true"
                style={{ cursor: 'grab' }}
            >
                {sendData}
            </div>
        </Box>
    )
};

const DropBox = (props) => {
    const { ShowLabel, setUpdata } = props;
    // ドロップ設定データ
    const [draggedData, setDraggedData] = useState(null);

    // ドロップ時の処理
    const handleDrop = (e, setData) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        setData(data);
        setUpdata(data);
    }
    // ドロップ許可
    const allowDrop = (e) => {
        e.preventDefault();
    }

    // クリアボタン
    const handleClear = () => {
        setDraggedData("");
        setUpdata("");
    }

    return (
        <Box sx={{ border: '2px solid blue', my: 1, width: 200 }}>
            <div onClick={handleClear}
                onDrop={(e) => handleDrop(e, setDraggedData)}
                onDragOver={allowDrop}
            >
                {ShowLabel}= {draggedData}
            </div>
        </Box>
    )
};