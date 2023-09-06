import { useRoutes } from 'react-router-dom';

// ルーティング読み込み
import MainRoutes from './Main';
import MockRoutes from 'Mock/Routes';


export default function Routes() {
    return useRoutes([MainRoutes, MockRoutes]);
}

