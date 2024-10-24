//React 
import React, { useState } from 'react';
// MUIコンポーネント読み込み
import { Button, Stack, Box } from '@mui/material';

// 日付時刻変更コンポーネント
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { ButtonDateTimePicker } from './ButtonDateTimePicker';

// MUIコンポーネントをラップするカスタムコンポーネント
export const DateTimePicker_C = (props) => {
    const { showTime, setTime } = props;

    return (
        <>
            <Stack direction="row" spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
                    <ButtonDateTimePicker
                        defaultValue={dayjs(showTime)}
                        onChange={(newValue) => setTime(newValue.toDate())}
                    />
                </LocalizationProvider>
                <ResetTimeButton setTime={setTime} />
            </Stack>
        </>
    )
}


// 現在時刻に戻すボタン
export const ResetTimeButton = (props) => {
    const { setTime } = props;

    return (
        <Button sx={{ height: '100%' }} variant="outlined" onClick={() => setTime(new Date())}>
            Now
        </Button>
    );
}


export default DateTimePicker_C;
