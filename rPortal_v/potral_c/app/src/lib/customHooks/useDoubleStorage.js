/*
    ローカルストレージとセッションストレージの両方にデータを保存するカスタムフック
    初期値はローカルストレージから取得する
*/

// react-useのuseLocalStorageとuseSessionStorageをインポート
import { useLocalStorage, useSessionStorage } from 'react-use';

// カスタムフックの定義
export const useDoubleStorage = (key, initialValue) => {
    // ローカルストレージとセッションストレージの両方にデータを保存する
    const [localStorage, setLocalstorage] = useLocalStorage(key, initialValue);
    const [sessionStorage, setSessionStorage] = useSessionStorage(key, localStorage);

    // セッションストレージとローカルストレージの両方にデータを保存する
    const setDoubleStorage = (value) => {
        setLocalstorage(value);
        setSessionStorage(value);
    }

    // セッションストレージと両方を更新する関数を返す
    return [sessionStorage, setDoubleStorage];
}