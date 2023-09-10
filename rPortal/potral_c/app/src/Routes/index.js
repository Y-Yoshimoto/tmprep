import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// ルーティング読み込み
import mainRoutes from './Main';

// モック読み込み
import mockRoutes from 'Mock/Routes';

// ルーティングの作成
const createRouter = () => {
    return createBrowserRouter(
        [...mainRoutes, ...mockRoutes]
        , {
            basename: "/",
        })
}

// ルーティングコンポーネント
export default function Routes() {
    return <RouterProvider router={createRouter()} />
}

