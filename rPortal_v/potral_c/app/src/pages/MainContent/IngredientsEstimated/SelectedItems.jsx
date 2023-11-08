import { useSessionStorage } from 'react-use';

// MUI コンポーネント
import {
    Box, List, ListItem, Divider, ToggleButtonGroup, ToggleButton,
    Tabs, Tab, ListItemIcon, ListItemText
} from '@mui/material';
// MUIアイコン
import BuildIcon from '@mui/icons-material/Build';


// 料理リスト
//import RECIPES from '@/store/food/dish_mini';
import RECIPES from '@/store/food/dish';

export const SelectedItems = ({ wrapSetmealsMenus }) => {
    //const [filterCategory, setFilterCategory] = useState("all");
    const [filterCategory, setFilterCategory] = useSessionStorage('filterCategory', 'all');
    // レシピをカテゴリーでフィルタリング
    const filterRecipes = RECIPES.filter(recipe => (recipe.Category_en === filterCategory || filterCategory === "all"));

    //クリック操作
    const onClick = (data) => {
        wrapSetmealsMenus(data);
    }

    return (
        <>
            <Box sx={{ border: 0 }}>
                <CategoryTab filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
                <List sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'auto' }}>
                    {filterRecipes.map((value, index) => (
                        <MenuListItem key={index} value={value} onClick={onClick} />
                    ))}
                </List >
            </Box>
        </>

    )
}

const MenuListItem = ({ index, value, onClick }) => {
    return (<ListItem
        key={index}
        color='text.primary'
        disableGutters
        onClick={() => onClick(value)}
        sx={{ '&:hover': { backgroundColor: 'grey.200', }, }}
    >
        {/** アイコン */}
        <ListItemIcon sx={{ marginLeft: 2 }}>
            <BuildIcon />
        </ListItemIcon>
        {/** ラベルテキスト */}
        <ListItemText
            primary={value.name}
        />
        {/*<Divider />*/}
    </ListItem>)


};

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

const CategoryTab = ({ filterCategory, setFilterCategory }) => {

    const handleChange = (event, newAlignment) => {
        setFilterCategory(newAlignment);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
            <Tabs value={filterCategory} onChange={handleChange} aria-label="basic tabs example" sx={{}}>
                <Tab label="全て" value="all" />
                <Tab label="カレー" value="Curry&Stew" />
                <Tab label="サラダ" value="Salad" />
                <Tab label="デザート" value="Sweets&Drink" />
            </Tabs>
        </Box>
    );

}