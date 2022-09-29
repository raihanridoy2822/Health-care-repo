import React, { useEffect, useState } from 'react';
import './Health.css';
import Fitness from './../../Fitness/Fitness';
const Health = () => {
    const [product, setProduct] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, []);
    const handleCard = (product) => {
        console.log(product);
        const newCard = [...card, product];
        setCard(newCard);
    }

    return (
        <div className='health-container'>
            <div className='activity'>

                {
                    product.map(product => <Fitness
                        key={product.id} product={product}
                        handleCard={handleCard} >
                    </Fitness>)
                }
            </div>


            <div className='details'>
                <h3>details</h3>
                <p>Exercise time:{card.length}</p>
            </div>
        </div>
    );
};

export default Health;