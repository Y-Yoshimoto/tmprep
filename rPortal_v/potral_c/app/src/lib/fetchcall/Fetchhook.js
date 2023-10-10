import { useState, useEffect } from "react";

/**
 * FetchAPIを使うコンポーネント用のフック
 * @param {string} uri: アクセス先URL
 * @param {object} options: FetchAPIのオプション
 * @param {boolean} suspend フェッチを中断するかどうか
 * @returns {object} { loading, data, error }
 */
export const useFetch = ({ uri, options = {}, suspend = false }) => {
    // Fetch状態ステート
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    console.debug(`Fetch: ${uri}`);

    useEffect(() => {
        // uriがない場合/中断中は何もしない
        if (!uri || suspend) return;
        fetch(uri, options)
            .then(data => {
                // エラーの場合はエラー情報を返す
                if (!data.ok) throwErrorStatus(data);
                console.debug(`Success Fetch: ${uri}`);
                console.dir(data);
                return data.json()
            })
            .then(setData)
            .then(() => {
                setLoading(false);
                setError(undefined);
            })
            .catch(error => {
                console.error(`Error fetching: ${uri}`);
                console.dir(error);
                setError(error);
                setLoading(false);
            });
    }, [uri]);

    return {
        loading,
        data,
        error
    };
}

// エラー情報を返す
function throwErrorStatus(data) {
    console.dir(data);
    const errorInfo = {
        status: data.status,
        statusText: data.statusText,
        url: data.url
    };
    //throw Error(errorInfo);
    throw new Error(`Fetch error ${errorInfo.status}: ${errorInfo.statusText}`, { cause: errorInfo });
}