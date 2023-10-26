// 遅延読み込みコンポーネント
import { useEffect, useState } from 'react';

// 読み込み中に停止する
await setWait({ time: 5000 });

export const LazyComponentB = () => {
  const [state, setState] = useState("追加処理中");

  useEffect(() => {
    setWait({ time: 5000 }).then(() => {
      setState("追加処理完了");
    });
  }, []);


  return (
    <div>
      <h1>LazyComponentB</h1>
      <p>{state}</p>
    </div>
  );
}

export default LazyComponentB;

// 待機処理関数
function setWait({ time = 3000 }) {
  console.log(`Wait ${time}ms`);
  return new Promise(resolve => setTimeout(resolve, time));
}