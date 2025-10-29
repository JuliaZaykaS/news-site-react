import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('render in document', () => {
        render(<Button>TEST</Button>);
        expect(
            screen.getByText('TEST'),
        ).toBeInTheDocument();
    });
    test('use theme clear', () => {
        render(<Button variant={'clear'}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass(
            'clear',
        );
        screen.debug(); // для отображения результата в консоли
    });
});
