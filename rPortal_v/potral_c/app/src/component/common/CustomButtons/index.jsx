// カスタムスタイルボタンコンポーネント
// MUIコンポーネント読み込み
import { Tooltip, IconButton } from '@mui/material';

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

