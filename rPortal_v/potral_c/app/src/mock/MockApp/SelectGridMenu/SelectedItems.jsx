import { useSessionStorage } from 'react-use';

// MUI コンポーネント
import {
    List, ListItem, Divider, ToggleButtonGroup, ToggleButton
} from '@mui/material';

// 料理リスト
import RECIPES from '@/store/food/dish_mini';

export const SelectedItems = ({ wrapSetmealsMenus }) => {
    //const [filterCategory, setFilterCategory] = useState("all");
    const [filterCategory, setFilterCategory] = useSessionStorage('filterCategory', 'all');
    // レシピをカテゴリーでフィルタリング
    const filterRecipes = RECIPES.filter(recipe => (recipe.Category_en === filterCategory || filterCategory === "all"));

    const onClick = (data) => {
        console.log(data);
        wrapSetmealsMenus(data);
    }

    return (
        <>
            <CategoryToggle filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
            <List sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper', mx: 2 }}>
                {filterRecipes.map((value, index) => (
                    <div key={`${index}_l`}>
                        <ListItem
                            key={index}
                            disableGutters
                            onClick={() => onClick(value)}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'grey.200',
                                },
                            }}
                        >
                            {value.name}
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List >
        </>

    )
}

const CategoryToggle = ({ filterCategory, setFilterCategory }) => {

    const handleChange = (event, newAlignment) => {
        setFilterCategory(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={filterCategory}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton value="all">全て</ToggleButton>
            <ToggleButton value="Curry&Stew">カレー</ToggleButton>
            <ToggleButton value="Salad">サラダ</ToggleButton>
            <ToggleButton value="Sweets&Drink">デザート</ToggleButton>
        </ToggleButtonGroup>
    );

}