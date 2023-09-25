/**
 * @fileoverview 開発中に設置するモックページ
 * @module Mockk/Components
 */
//MUIコンポーネント
import { Link } from '@mui/material';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
// モックコンポーネント読み込み
import { MockMessage, MockGrid, MockBox, GridItem, MockLayout } from "./Components";

/** 
 * モックページ
 * アクセスしているパスを返すページを生成する関数コンポーネント
 * @function
 * @param {Object} props - React props
 * @param {string} [props.number=""] - ページ番号
 * @param {string} [props.numberOfGrids=9] - モックグリッドに表示するモックペーパーの数
 * @returns {JSX.Element} モックページ
 */
export const MockPlainPage = ({ path = "" }) => {
    return (
        <MockLayout>
            <MockMessage message={`Mock Page.`} hSize="h2" />
            <MockBox>
                <MockMessage message={`Path: ${path}`} hSize="h3" />
            </MockBox>
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。<br />
            <MockMessage message={`宮沢賢治 "ポラーノの広場" 1934`} hSize="h6" /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
            <MockMessage message={`Marcus Tullius Cicero "De finibus bonorum et malorum" 35 B.C.`} hSize="h6" /><br />
        </MockLayout>

    )
};

/** 
 * モックグリッドページ
 * モックのグリッド表示ページを生成する関数コンポーネント
 * @function
 * @param {Object} props - React props
 * @param {string} [props.number=""] - ページ番号
 * @param {string} [props.numberOfGrids=9] - モックグリッドに表示するモックペーパーの数
 * @returns {JSX.Element} モックページ
 */
export const MockGridPage = ({ number = "", path = "", numberOfGrids = 9 }) => {
    // モックグリッドに表示するモックペーパー
    const items = Array.from(Array(numberOfGrids)).map((_, index) => (<GridItem index={index} />));
    return (
        <MockLayout>
            <MockMessage message={`Mock Page ${number}`} hSize="h2" />
            <MockBox>
                <MockMessage message={`Path: ${path}`} hSize="h3" />
            </MockBox>
            <MockGrid items={items} />
        </MockLayout>
    )
};


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
    // 対象リンクアイテム
    const links = [
        { id: "MockGridPage1", path: '/mock/1' },
        { id: "MockGridPage2", path: '/mock/2' },
        { id: "CounterApp", path: '/mock/counter/v1' },
    ];


    return (
        <MockLayout>
            <MockMessage message={`Mock Link.`} hSize="h4" />
            <ul>
                {
                    links.map((link) => <li key={link.id} ><LinkItem id={link.id} path={link.path} /></li>)
                }
            </ul>
        </MockLayout>
    )
};



