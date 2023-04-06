import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Oders = () => {
    const data = useLoaderData()
    return (
        <div>
            hello{data.length}
        </div>
    );
};

export default Oders;
