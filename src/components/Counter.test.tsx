import { render, screen } from '@testing-library/react';
import { Counter } from './Counter'

describe('should test Counter component', () => {

    test('should render Counter component', () => {
        render(<Counter />)
        expect(screen.queryByText('count is: 0')).toBeInTheDocument()
    });

});