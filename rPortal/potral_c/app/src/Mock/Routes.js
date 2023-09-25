/** 
 * Reactモックコンポーネント用のルーティングオブジェクト
 * 仮設置のページを公開する
 */

// モックコンポーネント読み込み
import { MockLinkPage, MockGridPage } from './Pages';
// モックアプリケーション読み込み
import { CounterApps } from './MockApp/Counter';

// モックページのルーティング
/**
 * モックページのルーティング情報オブジェクト
 * id: ルーティングのID
 * path: ルーティングのパス
 * children: 子ルーティングを表すオブジェクト配列
 * element: ルーティングに対応するページコンポーネント
 */
const mockRoutes = [{
    id: "MockLinkPage",
    path: '/mock',
    element: <MockLinkPage />
},
{
    id: "MockPage",
    path: '/mock',
    children: [
        {
            id: "MockGridPage1",
            path: '1',
            element: <MockGridPage number={1} path={"/mock/1"} numberOfGrids={12} />
        }, {
            id: "MockGridPage2",
            path: '2',
            element: <MockGridPage number={2} path={"/mock/2"} numberOfGrids={16} />
        }, {
            id: "CounterApp",
            path: 'counter/v1',
            element: <CounterApps />
        }
    ]
}];
// 統合ルーティングオブジェクト
export default mockRoutes;