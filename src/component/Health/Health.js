import React, { useEffect, useState } from 'react';
import './Health.css';
import Fitness from './../../Fitness/Fitness';
const Health = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, []);

    return (
        <div className='health-container'>
            <div className='activity'>
                {
                    product.map(product => <Fitness></Fitness>)
                }
            </div>
            <div className='details'>
                <h3>details</h3>
            </div>
        </div>
    );
};

export default Health;