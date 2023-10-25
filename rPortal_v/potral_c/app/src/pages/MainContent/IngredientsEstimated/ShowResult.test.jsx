//// マスターデータインポート
// 料理リスト
//const RECIPES = require('/app/src/store/food/dish_mini');
// 食材マスターリスト
//const INGREDIENTSMASTER = require('/app/src/store/food/ingredients');
import { expect, test } from 'vitest'

import { RECIPES } from '/app/src/store/food/dish_mini';

import { INGREDIENTSMASTER } from '/app/src/store/food/dish_mini';

console.log('ShowResult.test.jsx ---------');
// 関数定義
const add = (a, b) => a + b;

//テスト
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});