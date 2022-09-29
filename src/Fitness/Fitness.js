import React from 'react';
import './Fitness.css'
const Fitness = (props) => {
    const { name, img, age, time } = props.product;
    return (
        <div className='fitness-img'>
            <img src={img} alt=""></img>
            <p>{name}</p>
        </div>
    );
};

export default Fitness;