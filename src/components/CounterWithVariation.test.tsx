import { fireEvent, render, screen } from '@testing-library/react';
import { CounterWithVariation } from './CounterWithVariation'

describe('should test CounterWithVariation component', () => {
    test('should render component', () => {
        render(<CounterWithVariation />)
        expect(screen.queryByText('Counter with Variation:')).toBeInTheDocument()
    });

    test('should work controls the variation control', () => {
        render(<CounterWithVariation />)
        expect(screen.queryByText('Counter: 0')).toBeInTheDocument()
        expect(screen.queryByText('Variation: 1')).toBeInTheDocument()

        fireEvent.change(screen.getByLabelText(/^Variation:/), { target: { value: '5' } })

        expect(screen.queryByText('Counter: 0')).toBeInTheDocument()
        expect(screen.queryByText('Variation: 5')).toBeInTheDocument()

        fireEvent.click(screen.getByText('Increment'))

        expect(screen.queryByText('Counter: 5')).toBeInTheDocument()
        expect(screen.queryByText('Variation: 5')).toBeInTheDocument()

        fireEvent.click(screen.getByText('Decrement'))
        fireEvent.click(screen.getByText('Decrement'))

        expect(screen.queryByText('Counter: -5')).toBeInTheDocument()
        expect(screen.queryByText('Variation: 5')).toBeInTheDocument()

        fireEvent.click(screen.getByText('Reset'))

        expect(screen.queryByText('Counter: 0')).toBeInTheDocument()
        expect(screen.queryByText('Variation: 5')).toBeInTheDocument()
    });
});