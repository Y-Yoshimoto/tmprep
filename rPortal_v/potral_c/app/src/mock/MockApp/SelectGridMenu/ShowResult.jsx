import { useState } from 'react';


// MUI コンポーネント
import { Box, Divider } from '@mui/material';

// モックコンポーネント
import { MockLayout, MockMessage } from '../../Components';

// 食材リスト
import ingredients from '@/store/food/ingredients';


export const ShowResult = ({ mealsMenus }) => {
    //console.dir(ingredients);// 食材リスト
    //console.dir(mealsMenus);// 受信データリスト

    // 食材リスト生成関数
    const ingredientsList = mealsMenus
        //受信データから食材情報を抽出
        .reduce((acc, data) => [...acc, ...(data.ingredients || [])], [])
        // 並び替え
        .sort((a, b) => a.id - b.id)
        // 食材毎の個数を集計
        .reduce((acc, data) => ({ ...acc, [data.id]: (acc[data.id] ?? 0) + data.quantity }), {});
    // 食材名を突合
    const useingredients = Object.entries(ingredientsList).map(([id, quantity]) => {
        // 食材検索
        const ingredient = ingredients.find(ingredient => ingredient.id == id);
        return { id: id, name: ingredient.name, quantity: quantity, }
    });
    //console.info(useingredients);// 食材リスト


    return (
        <>
            {/* 使用する食材数を計算 */}
            <MockMessage message={`食材種類: ${useingredients.length}`} hSize="h6" />
            {useingredients.map((data, index) => (
                <div key={index}>
                    <MockMessage message={`${data.name}: ${data.quantity}`} /><br />
                </div>
            ))}

        </>
    )
}