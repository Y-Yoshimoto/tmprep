/* 
    必要経験値, 飴数表示コンポーネント
*/
import { Stack, Typography } from "@mui/material";

import { CANDYEXP } from '../constant.js';

// 必要経験値, 飴数表示コンポーネント
export const ShowExperience = ({ sleepExpGain, candyExpGain, needExp }) => {
    const needDays = Math.ceil((needExp - candyExpGain) / sleepExpGain);
    const needCandy = Math.ceil((needExp - candyExpGain) / CANDYEXP);
    return (
        <>
            <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: 0, sm: 4 }}
                justifyContent={{ xs: "space-evenly", sm: "flex-start" }}>
                <Typography variant="h6" gutterBottom>必要日数:{needDays}日 </Typography>
                <Typography variant="h6" gutterBottom>必要飴数:{needCandy}個 </Typography>
            </Stack>
        </>
    )
}

export default ShowExperience;