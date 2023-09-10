/**
 * @fileoverview 開発中に設置するモックページ
 * @module Mockk/Components
 */
//MUIコンポーネント
import { Link } from '@mui/material';
// モックコンポーネント読み込み
import { MockMessage, MockGrid, MockBox, GridItem, MockLayout } from "./Components";

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
    // リンクアイテムコンポーネント
    const LinkItem = ({ id, path }) => <Link href={path}>{id}</Link>;
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



