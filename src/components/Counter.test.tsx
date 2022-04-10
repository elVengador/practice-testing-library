import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './Counter'

describe('should test Counter component', () => {

    test('should render Counter component', () => {
        render(<Counter />)
        expect(screen.queryByText('count is: 0')).toBeInTheDocument()
    });

    test('should work controls from Counter', () => {
        render(<Counter />)
        expect(screen.queryByText('count is: 0')).toBeInTheDocument()
        fireEvent.click(screen.getByText('Increment'))
        fireEvent.click(screen.getByText('Increment'))
        expect(screen.queryByText('count is: 2')).toBeInTheDocument()
        fireEvent.click(screen.getByText('Decrement'))
        expect(screen.queryByText('count is: 1')).toBeInTheDocument()
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.queryByText('count is: 0')).toBeInTheDocument()

    })

});