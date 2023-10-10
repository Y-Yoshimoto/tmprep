// モックコンポーネント読み込み
import { MockMessage, MockLayoutBox } from "@/mock/Components";

export const Input = (props) => {
    return (
        <MockLayoutBox>
            <MockMessage message="Input" />
        </MockLayoutBox>
    );
}
