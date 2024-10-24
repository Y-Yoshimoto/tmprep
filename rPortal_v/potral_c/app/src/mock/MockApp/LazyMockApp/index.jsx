import { lazy, Suspense } from 'react';

// 遅延読み込みするコンポーネント
const LazyComponentA = lazy(() => import('./LazyComponentA'));
const LazyComponentB = lazy(() => import('./LazyComponentB'));

export const LazyMockApp = () => {
    return (
        <div>
            遅延読み込みコンポーネントサンプル<br />
            <Suspense fallback={<div>Loading...</div>}>
                遅延読み込み完了
                <LazyComponentA />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponentB />
            </Suspense>
        </div>
    );
}

export default LazyMockApp;