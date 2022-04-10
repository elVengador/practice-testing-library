import React, { useState } from 'react'

export const CounterWithVariation = () => {

    const [counter, setCounter] = useState(0)
    const [variant, setVariant] = useState(1)

    return (
        <div>
            <h5>Counter with Variation:</h5>
            <h2>Counter: {counter}</h2>
            <div>
                <div>
                    <label htmlFor='variation'>Variation: {variant}</label>
                </div>
                <input
                    type="range"
                    id='variation'
                    min={1}
                    max={10}
                    value={variant}
                    onChange={(e) => setVariant(Number(e.currentTarget.value))}
                />
            </div>
            <button onClick={() => setCounter(counter => counter - variant)}>Decrement</button>
            <button onClick={() => setCounter(0)}>Reset</button>
            <button onClick={() => setCounter(counter => counter + variant)}>Increment</button>
        </div>
    )
}
