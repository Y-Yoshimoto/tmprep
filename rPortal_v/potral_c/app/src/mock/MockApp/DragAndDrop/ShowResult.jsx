import { useState } from 'react';
// MUI コンポーネント
import { Box, Divider } from '@mui/material';

// モックコンポーネント
import { MockLayout, MockMessage } from '../../Components';



export const ShowResult = ({ DataList }) => {
    const sumEnergy = DataList.reduce((sum, data) => sum + (data.energy || 0), 0);
    return (
        <>
            合計エナジー: {sumEnergy} <br />
            {/* DataListの中身を表示 */}
            {"["}
            {DataList.map((data, index) => (
                <MockMessage key={index} message={(data?.shortLabel || "") + "   "} />
            ))}{"]"}

        </>
    )
}