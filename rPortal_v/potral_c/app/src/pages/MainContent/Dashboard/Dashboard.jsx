// React インポート
import { useState } from "react";
// MUI コンポーネント
import { Box, TextField, Button, Stack } from "@mui/material";

// モックコンポーネント読み込み
import { MockMessage, MockLayoutBox } from "@/mock/Components";

// Fetchコンポーネント呼び出し
import { FetchComponent } from "@/lib/fetchcall";
import { Numbers } from "@mui/icons-material";


export const Dashboard = (props) => {
    // FetchAPIサンプル
    const [number, setNumber] = useState(1);
    const [inputValue, setInputValue] = useState(1);

    const onClick = () => {
        console.debug("onClick");
        setNumber(inputValue);
    }

    return (
        <MockLayoutBox>
            <MockMessage message="Dashboard" /><br />
        </MockLayoutBox>
    );
}