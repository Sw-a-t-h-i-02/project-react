import React, { useState } from 'react';

const GetStarted = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count => count + 1);
    };
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleCount}>Increase Count</button>
        </>
    );
};

export default GetStarted;
