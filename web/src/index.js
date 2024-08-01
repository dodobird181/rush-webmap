import React, { useEffect, useState } from 'react';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, [])

    return (
        <div>
            <h1>React App with PostgreSQL/PostGIS</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;