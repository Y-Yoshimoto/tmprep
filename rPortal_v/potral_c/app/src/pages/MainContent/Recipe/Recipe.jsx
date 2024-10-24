// モックコンポーネント読み込み
import { MockMessage, MockLayoutBox } from "@/mock/Components";

export const Recipe = (props) => {
    return (
        <MockLayoutBox>
            <MockMessage message="Recipe" />
        </MockLayoutBox>
    );
}
