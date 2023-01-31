import { useState } from 'react';

export const Counter = () => {
    const [count, setCoubt] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCoubt((a) => a + 1)}>123</button>
        </div>
    );
};
