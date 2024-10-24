// カスタムスタイルボタンコンポーネント
// MUIコンポーネント読み込み
import { Tooltip, IconButton } from '@mui/material';
import { Box, ToggleButton, ToggleButtonGroup, Typography, TextField, Autocomplete, FormControl, Select, NativeSelect, MenuItem, InputLabel } from "@mui/material";


/** カスタムアイコンボタン
 * ツールチップ/フォーバーアイコンボタン
 * @fanction C_IconButton
 * @param {object} props
 * @param {object} props.children
 * @param {object} props.sx
 * @param {function} props.onClick
 * @param {string} props.title
 * @param {object} props.rest
 * @returns
 */
export const C_IconButton = (props) => {
    const { children, sx = {}, onClick = () => { }, title, ...rest } = props;
    // ベーススタイル
    const baseStyle = {
        borderRadius: '12px',
        overflow: 'hidden',
        '&:hover, &.Mui-focusVisible': {
            boxShadow: 0,
            backgroundColor: 'primary.light',
        },
    };

    return (
        <Tooltip title={title}>
            <IconButton onClick={onClick} sx={{ ...sx, ...baseStyle }} {...rest}>
                {children}
            </IconButton>
        </Tooltip>
    );
}

/* カスタムトグルボタンコンポーネント
    オブジェクトの配列を受け取り、値を設定する関数コンポーネント
*/
export const C_ToggleButtonGroup = ({ value, setValue, options, buttonLabel, dataTestId = "C_ToggleButtonGroup" }) => {
    // トグルボタンのハンドラ
    const handleAlignment = (_, newAlignment) => {
        (newAlignment != null) && setValue(newAlignment);
    };

    return (
        <>
            <Box>
                <Typography data-testid="TogleButtonLabel">{buttonLabel}</Typography>
                <ToggleButtonGroup
                    value={value}
                    exclusive
                    onChange={handleAlignment}
                    data-testid={dataTestId}
                //aria-label="togglebuttongroup"
                >
                    {options.map((option) => (
                        <ToggleButton key={option.label} value={option.value} aria-label={option.label} data-testid={`option_${option.label}`}>
                            {option.item}
                        </ToggleButton>
                    )
                    )}
                </ToggleButtonGroup>
            </Box>
        </>
    )
}

/* カスタム整数値選択コンポーネント ネイティブセレクタ利用*/
export const C_IntSelecter = ({ min, max, value, setValue, textLabel = "IntSelecter", width = 100, addLabel = "", sx = {}, dataTestId = "C_IntSelecter" }) => {
    // 選択リスト
    const optionList = Array.from({ length: (max - min + 1) }, (_, i) => { return min + i });

    // ラベル置き換え関数
    const addOLabel = (x) => { return `${String(x)} ${addLabel}` };

    return (
        <>
            <FormControl sx={{ ...sx, minWidth: width }} >
                <InputLabel id={`InputLabel_${textLabel}`}>{textLabel}</InputLabel>
                <NativeSelect
                    id={`Select_${textLabel}`}
                    data-testid={dataTestId}
                    value={value}
                    label="race"
                    onChange={(event) => {
                        //console.log("--------------------");
                        //console.log(event.target.value);
                        setValue(Number(event.target.value));
                    }}
                >
                    {optionList.map((x) => {
                        return (
                            <option key={`${textLabel}_${x}`} value={x} data-testid={`option_${x}`}>{addOLabel(x)}</option>
                        )
                    })}
                </NativeSelect>
            </FormControl>
        </>
    )
}
/* カスタム整数値選択コンポーネント MUIセレクター利用*/
export const C_IntSelecter_MUISelect = ({ min, max, value, setValue, textLabel, width, addLabel = "" }) => {
    // 選択リスト
    const optionList = Array.from({ length: (max - min) }, (_, i) => { return min + i });
    // ラベル置き換え関数
    const addOLabel = (x) => { return `${String(x)} ${addLabel}` };

    return (
        <>
            <FormControl sx={{ minWidth: width }}>
                <InputLabel id={`InputLabel_${textLabel}`}>{textLabel}</InputLabel>
                <Select
                    id={`Select_${textLabel}`}
                    value={value}
                    label="race"
                    onChange={(event) => {
                        //console.log("--------------------");
                        //console.log(event.target.value);
                        setValue(event.target.value);
                        //setValue(Number(removeOptionLabel(newValue)));
                    }}
                >
                    {optionList.map((x) => <MenuItem key={`${textLabel}_${x}`} value={x}>{addOLabel(x)}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </>
    )
}
/* カスタム整数値選択コンポーネント Autocomplete利用*/
export const C_IntSelecter_Input = ({ min, max, value, setValue, textLabel, width, addLabel = "" }) => {
    // 選択リスト
    const optionList = Array.from({ length: (max - min) }, (_, i) => { return min + i });
    // ラベル置き換え関数
    const addOptionLabel = (x) => { return `${String(x)} ${addLabel}` };
    const removeOptionLabel = (x) => { return Number(x.replace(addLabel, "")) };

    return (
        <>
            <Autocomplete
                id={textLabel}
                autoComplete={true}
                value={addOptionLabel(value)}
                disableClearable={true}
                onChange={(event, newValue) => {
                    //console.log(newValue);
                    setValue(Number(removeOptionLabel(newValue)));
                }}
                options={optionList.map((x) => addOptionLabel(x))}
                sx={{ width: width ?? 100 }}
                renderInput={(params) => <TextField {...params} label={textLabel} />}
            />
        </>
    )
}

