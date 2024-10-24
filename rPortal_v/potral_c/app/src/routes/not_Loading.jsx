/** 
 * 読み込み中ページのルーティング
 */
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

// ページコンポーネント
import { LoadingFullSurface } from '@/component/common/Loading';

// モックコンポーネント
import { MockPlainPage } from 'Mock';

/** 
* 読み込み中ルーティングの設定関数
* @function
* @param {Object} props - React props
* @returns {list} ルーティングリスト
*/
const LoadingRoutes = () => {
    return (
        [{
            path: '/loading',
            element: <LoadingFullSurface />
        },
        {
            path: '/*',
            element: <Navigate to={"/loading"} />
        }]);
};
export default LoadingRoutes;