// Fetchコンポーネント
import { useFetch } from "./Fetchhook.js";

/**
 * Fetchリクエストを行い、結果を表示するコンポーネント
 * @param {string} uri APIのURI
 * @param {function} renderSuccess 成功時に表示するコンポーネント
 * @param {function} renderLoading ローディング時に表示するコンポーネント
 * @param {function} renderError エラー時に表示するコンポーネント
 * @returns　{JSX.Element} 各状態でコンポーネント
 */
export function FetchComponent({
    uri,
    renderSuccess = ({ data }) => <ShowSuccess data={data} />,
    renderLoading = () => <ShowLoading />,
    renderError = ({ error }) => <ShowError error={error} />,
}) {
    //console.debug(`FetchComponent: ${uri}`);

    const { loading, data, error } = useFetch({ uri });
    if (error) return renderError(error);
    if (loading) return renderLoading();
    if (data) return renderSuccess({ data });
}

//成功表示コンポーネント
function ShowSuccess({ data }) {
    //console.debug("ShowSuccess");
    //console.dir(data);
    return (<>Success</>)
}

// ローディング表示コンポーネント
function ShowLoading() {
    //console.debug("ShowLoading");
    return (<>loading...</>)
}
// エラー表示コンポーネント
function ShowError({ error }) {
    //console.debug("ShowError");
    //console.dir(error);
    return (<>Error.</>)
}