import { lazy } from 'react';

// モックコンポーネント
import { MockPage } from 'Mock';

const MainRoutes = {
    path: '/',
    element: <MockPage number={0} path={"/"} />
};

export default MainRoutes;