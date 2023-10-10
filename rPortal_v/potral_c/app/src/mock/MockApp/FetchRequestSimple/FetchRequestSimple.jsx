// React インポート
import { useState } from "react";
// MUI コンポーネント
import { Box, TextField, Button, Stack } from "@mui/material";

// モックコンポーネント読み込み
import { MockMessage } from "@/mock/Components";

// Fetchコンポーネント呼び出し
import { FetchComponent } from "@/lib/fetchcall";
import { Numbers } from "@mui/icons-material";


export const FetchRequestSimple = (props) => {
    console.debug("FetchRequestSimple");
    // FetchAPIサンプル
    const [number, setNumber] = useState(1);
    const [inputValue, setInputValue] = useState(1);

    const onClick = () => {
        //console.debug("onClick");
        setNumber(inputValue);
    }

    return (
        <Box>
            <MockMessage message="FetchRequestSimple" /><br />
            <Stack direction="row" spacing={2}>
                <TextField
                    sx={{ width: 100 }}
                    label="整数値"
                    type="number"
                    inputProps={{ min: 0, max: 100, step: 1 }}
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                />
                <Button variant="contained" onClick={onClick}>送信</Button>
            </Stack>
            <FetchComponent uri={`/api?id=${number}`} renderSuccess={ShowNumData} />
        </Box>
    );
}

function ShowNumData({ data }) {
    //console.debug("ShowNumData");
    return (
        <div>
            <h2>{data.id}: {data.data}</h2>
        </div>
    );
}