/**
 * @fileoverview ポータルのメインレイアウトコンポーネント
 * @module Mockk/Components
 */
//MUIコンポーネント
import { Link } from '@mui/material';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
// モックコンポーネント読み込み
import { MockMessage, MockGrid, MockBox, GridItem, MockLayout } from "@/Mock/Components";

/** 
 * メインページを生成する関数コンポーネント
 * 
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element} メインページ
 */
export const PortalMain = ({ path = "" }) => {
    return (
        <>
            <MockMessage message={`PortalMain`} hSize="h3" />
        </>
    )
};