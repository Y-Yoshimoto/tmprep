import React, { useState } from 'react';

export function ErrorBoundary(props) {
    const [hasError, setHasError] = useState(false);

    function handleCatch(error, errorInfo) {
        // エラーをログに記録するなどの処理を行う
        console.error(error, errorInfo);
        setHasError(true);
    }

    if (hasError) {
        // 代替のUIを表示する
        return <h1>Something went wrong.</h1>;
    }

    return (
        <>
            {React.Children.map(props.children, (child) =>
                React.cloneElement(child, { onError: handleCatch })
            )}
        </>
    );
}
