import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoadingFullSurface } from './FullSurface';

describe('LoadingFullSurface', () => {
    it('renders the loading animation', () => {
        render(<LoadingFullSurface />);
        const loadingAnimation = screen.getByRole('progressbar');
        //expect(loadingAnimation).toBeInTheDocument();
    });

    /*
    it('displays the loading animation in the center of the page', () => {
        render(<LoadingFullSurface />);
        const loadingAnimation = screen.getByRole('progressbar');
        expect(loadingAnimation).toHaveStyle({ display: 'flex', justifyContent: 'center', alignItems: 'center' });
    });

    it('has a height of 100vh', () => {
        render(<LoadingFullSurface />);
        const loadingContainer = screen.getByRole('progressbar').parentElement;
        expect(loadingContainer).toHaveStyle({ height: '100vh' });
    });
    */
});