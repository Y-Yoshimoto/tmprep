/** 
 * Reactモックコンポーネント用のルーティングオブジェクト
 * 仮設置のページを公開する
 */

// モックコンポーネント読み込み
import { MockGridPage } from './Pages';
import { MockLinkPage } from './MockLinkPage';
// モックアプリケーション読み込み
import { CounterApps } from './MockApp/Counter';
import { ChangeScreen, ChangeScreenSub } from './MockApp/ChangeScreen';

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
        }, {
            id: "ChangeScreen",
            path: 'changescreen',
            element: <ChangeScreen />,
        }, {
            id: "ChangeScreenSub",
            path: 'changescreen/sub',
            element: <ChangeScreenSub />,
        }
    ]
}];
// 統合ルーティングオブジェクト
export default mockRoutes;