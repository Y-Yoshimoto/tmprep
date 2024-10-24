import { useState } from 'react';


// MUI コンポーネント
import { Box, Divider } from '@mui/material';

// モックコンポーネント
import { MockLayout, MockMessage } from '@/mock/Components';

// 食材マスターリスト
import INGREDIENTSMASTER from '@/store/food/ingredients';
import { Margin } from '@mui/icons-material';

export const ShowResult = ({ mealsMenus }) => {
    //console.dir(mealsMenus);
    // メニューで使用する食材リスト生成
    const mealsIngredients = createIngredientsList(mealsMenus);
    //console.dir(mealsIngredients);
    // 食材情報を突合してリスト生成
    const needIngredients = createUseIngredients(INGREDIENTSMASTER, mealsIngredients);
    //console.dir(needIngredients);

    return (
        <>
            {/* 使用する食材数を計算 */}
            <Box sx={{ backgroundColor: '#FFFFFF' }}>
                <Box fontWeight="fontWeightMedium"> {`食材種類: ${needIngredients.length}`}</Box>
                <ul style={{ margin: 0 }}>
                    {needIngredients.map((data, index) => (
                        <div key={index}>
                            {/*<MockMessage message={`${data.name}: ${data.quantity}`} /><br />*/}
                            <li> {`${data.name}: ${data.quantity}`} </li>
                        </div>
                    ))}
                </ul>
            </Box >

        </>
    )
}

// 食材リスト生成関数
const createIngredientsList = (mealsMenus) => {
    return (mealsMenus
        //受信データから食材情報を抽出
        .reduce((acc, data) => [...acc, ...(data.ingredients || [])], [])
        // 並び替え
        .sort((a, b) => a.id - b.id)
        // 食材毎の個数を集計
        .reduce((acc, data) => ({ ...acc, [data.id]: (acc[data.id] ?? 0) + data.quantity }), {})
    )
};

// 食材名を突合
const createUseIngredients = (ingredientsMaster, ingredientsList) => Object.entries(ingredientsList).map(([id, quantity]) => {
    const ingredient = ingredientsMaster.find(ingredient => ingredient.id == id);
    return { id: id, name: ingredient.name, quantity: quantity, }
});