import { Link, NavLink } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { MockMessage, MockLayout } from "./Components";

// ルーティングの設定読み込み
import { mockRoutes } from './Routes';

/** 
 * モックリンクページ
 * モック各ページへのリンクを表示するページを生成する関数コンポーネント
 * @function
 * @param {Object} props - React props
 */
export const MockLinkPage = (props) => {
    // リンクアイテムコンポーネント(プロップフォワーディング付き)
    const LinkItem = ({ id, path }) => <Link component={RouterLink} to={path}>{id}</Link>;
    // リンクアイテムコンポーネント(プロップフォワーディングなし)
    //const LinkItem = ({ id, path }) => <Link component={RouterLink} to={path}>{id}</Link>;\
    /* 対象リンクアイテム
    const links = [
        { id: "MockGridPage1", path: '/mock/1' },
        { id: "MockGridPage2", path: '/mock/2' },
        { id: "CounterApp", path: '/mock/counter/v1' },
        { id: "ChangeScreen", path: '/mock/changescreen' },
        { id: "MockPortalMain", path: '/mock/portal' },
        { id: "FetchRequest", path: '/mock/fetchrequest' },
        { id: "DragAndDropMenuMock", path: '/mock/DragAndDropMenumock' },
    ];*/
    // MockPage取り出し関数
    const findMockPage = (route) => route.id === "MockPage";
    // 対象リンクアイテム化関数
    const makelinkItem = (linkpage) => ({ id: linkpage.id, path: `/mock/${linkpage.path}` });
    // 対象リンクアイテム配列生成
    const links = mockRoutes.find(findMockPage).children.map(makelinkItem);

    return (
        <MockLayout>
            <MockMessage message={`Mock Link.`} hSize="h4" />
            <ul>
                {
                    //links.map((link) => <li key={link.id} ><LinkItem id={link.id} path={link.path} /></li>)
                    links.map((link) => <li key={link.id} ><NavLink id={link.id} to={link.path} >{link.id}</NavLink></li>)
                }
            </ul>
        </MockLayout>
        // links.map((link) => <li key={link.id} ><LinkItem id={link.id} path={link.path} /></li>)
        // links.map((link) => <li key={link.id} ><NavLink id={link.id} to={link.path} >{link.id}</NavLink></li>)
        //<Link または NavLink to="<リンクのパス>">テキスト</Link または NavLink>
    )
};
