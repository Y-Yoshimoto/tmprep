// モックカウンターアプリケーション
//Reactコンポーネント
import { useState } from 'react';

/**
 * カウンターアプリケーションコンポーネント
 * クリックした数を表示するカウンターアプリケーション
 * @function
 * @returns {JSX.Element}
 */

export const SimpleCounter = () => {
    // クリック数を管理するステート
    const [count, setCount] = useState(0);
    // クリック時の処理
    const AddClick = () => setCount(c => c + 1);
    const ResetClick = () => setCount(0);

    return (
        <div style={{ background: "#DDDDDD" }}>
            <h2> SimpleCounter </h2>
            クリック数カウンター<br />
            <h4> {count} </h4>
            <button onClick={AddClick}> カウントアップ </button>
            <button onClick={ResetClick}> リセット </button>
        </div>
    )

};