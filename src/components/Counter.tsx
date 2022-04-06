import React, { useState } from 'react'

export const Counter = (): JSX.Element => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>count is: {count}</h2>
            <p>
                <button
                    type="button"
                    onClick={() => setCount((count) => count - 1)}>
                    Decrement
                </button>
                <button
                    type="button"
                    onClick={() => setCount(0)}>
                    Reset
                </button>
                <button
                    type="button"
                    onClick={() => setCount((count) => count + 1)}>
                    Increment
                </button>
            </p>
        </div>
    )
}
