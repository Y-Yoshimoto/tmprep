import { lazy } from 'react';


// モックコンポーネント
import { MockGridPage } from 'Mock';

const mainRoutes = [{
    path: '/',
    element: <MockGridPage number={0} path={"/"} />
},
{
    path: '/sub',
    element: <MockGridPage number={1} path={"/sub"} />
}];

export default mainRoutes;