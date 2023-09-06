/** 
 * Reactモックコンポーネント用のルーティングオブジェクト
 * 仮設置のページを公開する
 */

// モックコンポーネント読み込み
import { MockPage } from '../Mock';

// モックページのルーティング
/**
 * モックページのルーティング情報オブジェクト
 * path: ルーティングのパス
 * children: 子ルーティングを表すオブジェクト配列
 * element: ルーティングに対応するページコンポーネント
 */
const MockRoutes = {
    path: '/mock',
    children: [
        {
            path: '1',
            element: <MockPage number={1} path={"/mock1"} />
        },
        {
            path: '2',
            element: <MockPage number={2} path={"/mock2"} />
        }
    ]
};

export default MockRoutes;