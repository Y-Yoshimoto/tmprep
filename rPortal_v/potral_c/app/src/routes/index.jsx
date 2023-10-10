/** 
 * @desc React 各ルーティング読み込み振り分けるルーターの設定
 */
// ルーティング関連処理
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// 認証情報取得
import { authStateContext } from '@/lib/Authentication/AuthProvider';

// ルーティング読み込み
//// 認証済みルーティング関数
import AuthorizedRoutes from './Authorized';
//// 認証前のルーティング関数
import UnauthorizedRoutes from './Unauthorized';
// モック読み込み
import mockRoutes from '@/mock/Routes';

// 環境変数読み込み
// 環境変数からベースパスを取得/未定義の場合は/を設定
const ROUTER_BASENAME = import.meta.env.VITE_ROUTER_BASENAME || "/";
// Mockコンポーネントの有効/無効
const MOCK_ENABLED = JSON.parse(import.meta.env.VITE_MOCK_ENABLED || false);
console.debug("ROUTER_BASENAME", ROUTER_BASENAME);
console.debug("MOCK_ENABLED", MOCK_ENABLED);


/** ルーティング設定関数
 * 認証状態を管理し状態によってルーティングを振り分ける関数
 * @function
 * @returns {object} - ルーティングオブジェクト
 * @example
 * // ルーティングオブジェクト生成
 * const router = createRouter();
*/
const createRouter = () => {
    // 認証状態取得
    const { authState } = authStateContext();

    //認証状態によってルーティングを振り分ける
    const switchRouter = (status) => {
        if (status === undefined) return {}; //認証確認中の場合、空のルーティングを返す
        else return status ? AuthorizedRoutes() : UnauthorizedRoutes();
    }

    // モックルーティング追加
    const addRoutes = MOCK_ENABLED ? mockRoutes : [];

    // ルーティングオブジェクト生成
    return createBrowserRouter(
        [...switchRouter(authState), ...mockRoutes]
        , {
            basename: ROUTER_BASENAME,
        })
}

// ルーティングコンポーネント
export default function Routes({ authState }) {
    return <RouterProvider router={createRouter(authState)} />
}

// 認証関連処理 
