import { useState, useEffect, useRef } from 'react';

export const ParentComponent = ({ children, top }) => {
    const [height, setHeight] = useState(0);
    const firstDivRef = useRef();
    const secondDivRef = useRef();

    // 高さ調整
    useEffect(() => {
        secondDivRef.current.style.height = `${firstDivRef.current.clientHeight}px`
        if (height == secondDivRef.current.style.height) {
            setHeight(secondDivRef.current.style.height);
        }
    });

    // 上位コンポーネント
    const cssStyle = { position: 'fixed', top: top };

    return (
        <>
            <div ref={firstDivRef} style={cssStyle}>
                {children}
            </div>
            <div ref={secondDivRef}></div>
        </>
    );
}

export default ParentComponent;

//style={{ display: 'flex' }}>