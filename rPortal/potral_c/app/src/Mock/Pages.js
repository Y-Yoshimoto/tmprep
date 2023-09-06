/**
 * @fileoverview 開発中に設置するモックページ
 * @module Mockk/Components
 */

// モックコンポーネント読み込み
import { MockMessage, MockGrid, MockBox, GridItem } from "./Components";

/**
 * モックページを生成する関数コンポーネント
 * @function
 * @param {Object} props - React props
 * @param {string} [props.number=""] - ページ番号
 * @returns {JSX.Element} モックページ
 */
export const MockPage = ({ number = "", path = "" }) => {
    // モックグリッドに表示するモックペーパー
    const items = Array.from(Array(12)).map((_, index) => (<GridItem index={index} />));
    return (
        <>
            <MockMessage message={`Mock Page ${number}`} hSize="h2" />
            <MockBox>
                <MockMessage message={`Path: ${path}`} hSize="h3" />
            </MockBox>
            <MockGrid items={items} />
        </>
    )
};

