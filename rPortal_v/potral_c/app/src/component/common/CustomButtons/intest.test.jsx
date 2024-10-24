import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { within } from '@testing-library/dom'

// テスト対象コンポーネント
import { C_ToggleButtonGroup, C_IntSelecter } from './index';

describe('トグルカスタムボタン', () => {
    // 選択肢
    const options = [
        { label: 'Option1', value: 'option1', item: 'Option 1' },
        { label: 'Option2', value: 'option2', item: 'Option 2' },
        { label: 'Option3', value: 'option3', item: 'Option 3' },
    ];

    it('選択肢選択テスト', () => {
        const value = 'option2';
        const setValue = vi.fn();
        render(
            <C_ToggleButtonGroup value={value} setValue={setValue} options={options} dataTestId="C_ToggleButtonGroup_UT" />
        );
        // トグルボタンで選択肢が表示されていることを確認する
        const toggleButtons = screen.getAllByRole('button', { name: /Option/ });
        expect(toggleButtons).toHaveLength(3);

        const toggleButtonUnit = screen.getByTestId('C_ToggleButtonGroup_UT');
        // トグルボタンクリック時の操作を確認する
        const ops3 = within(toggleButtonUnit).getByTestId('option_Option3');
        ops3.click();
        expect(setValue.mock.calls[0]).toEqual(['option3']);
    });
});

describe('セレクターボタン', () => {

    it('セレクターボタン選択テスト', () => {
        console.log("セレクターボタン選択テスト");
        // モック関数
        const setValue = vi.fn();
        render(
            <C_IntSelecter min={1} max={10} value={2} setValue={setValue} dataTestId="C_IntSelecter_UT" />
        )

        // C_IntSelecter_UT要素を取得
        const container = screen.getByTestId('C_IntSelecter_UT');
        // その中からselect要素を取得
        const select = container.querySelector('select');

        // オプションを選択
        fireEvent.change(select, { target: { value: '10' } });
        // オプション選択の確認
        expect(setValue.mock.calls[0]).toEqual([10]);

    });
});