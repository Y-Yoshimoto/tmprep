// MUI メデイアクエリーカスタムフック
// MUIメデイアクエリステート
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// ブレークポイント設定
const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * レスポンシブデザインでブレークポイントを扱うためのカスタムフックです。
 * @returns {Object} 各ブレークポイントの値を含むオブジェクトです。
 * @property {boolean} downXS - ビューポートがXSブレークポイント以下かどうかを示します。
 * @property {boolean} downSM - ビューポートがSMブレークポイント以下かどうかを示します。
 * @property {boolean} downMD - ビューポートがMDブレークポイント以下かどうかを示します。
 * @property {boolean} downLG - ビューポートがLGブレークポイント以下かどうかを示します。
 * @property {boolean} downXL - ビューポートがXLブレークポイント以下かどうかを示します。
 * @property {boolean} upXS - ビューポートがXSブレークポイント以上かどうかを示します。
 * @property {boolean} upSM - ビューポートがSMブレークポイント以上かどうかを示します。
 * @property {boolean} upMD - ビューポートがMDブレークポイント以上かどうかを示します。
 * @property {boolean} upLG - ビューポートがLGブレークポイント以上かどうかを示します。
 */
export const useBreakpoints = () => {
    const theme = useTheme();
    // メデイアクエリーの値を取得するカスタムフック
    const useCheckBreakpoints = (breakpoint) => useMediaQuery(theme.breakpoints.down(breakpoint));

    // メディアクエリーステートを生成
    const [downXS, downSM, downMD, downLG, downXL] = BREAKPOINTS.map(useCheckBreakpoints);
    const [upXS, upSM, upMD, upLG, upXL] = [!downXS, !downSM, !downMD, !downLG, !downXL];

    // 各ブレイクポイントのture/falseを返す
    return { downXS, downSM, downMD, downLG, downXL, upXS, upSM, upMD, upLG, upXL };
}

export default useBreakpoints;