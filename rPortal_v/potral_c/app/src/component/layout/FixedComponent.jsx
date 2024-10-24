// React
import { useState, useEffect, useRef } from 'react';
// MUIコンポーネント
import { Box } from '@mui/material';

export const ParentComponent = ({ children, top }) => {
    // 子コンポーネント
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
            <Box ref={firstDivRef} style={cssStyle} sx={{ width: { xs: '100%', sm: 'unset' }, minWidth: '60%' }}>
                {children}
            </Box >
            <Box ref={secondDivRef}></Box>
        </>
    );
}

export default ParentComponent;

//style={{ display: 'flex' }}>