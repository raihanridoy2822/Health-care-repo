import React from 'react';
import './Fitness.css'
const Fitness = ({ product, handleCard }) => {
    // const { product, handleCard } = props;
    const { name, img, age, time } = product;


    return (
        <div className='total-fitness'>
            <div className='fitness-img'>
                <img src={img} alt=""></img>
                <h3>{name}</h3>
                <p>age:{age}</p>
                <p >time requirement: {time}</p>
            </div>
            <button onClick={() => handleCard(product)} className='btn-card'>
                <p>Add to list</p>
            </button>
        </div>

    );
};

export default Fitness;