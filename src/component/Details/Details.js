import React, { useState } from 'react';
import './Details.css'
const Details = (props) => {
    const { card } = props
    let time = 0;
    for (const x of card) {
        time = time + x.time
    }
    const [btime, setBtime] = useState(0)
    const onClickf = (x) => {
        setBtime(btime + x)

    }
    return (

        <div>
            <div>
                <h3>Raihan sarkar</h3>
                <div className='info'>
                    <p>75kg</p>
                    <p>6.5</p>
                    <p>25</p>
                </div>

            </div>

            <div>
                <h3>details</h3>
                <p>Exercise time:{time}</p>
            </div>

            <div>
                <button onClick={() => onClickf(10)} className='btn-design'>10</button>
                <button onClick={() => onClickf(20)} className='btn-design'>20</button>
                <button onClick={() => onClickf(30)} className='btn-design'>30</button>
                <button onClick={() => onClickf(40)} className='btn-design'>40</button>
            </div>
            < div>

                <p> time:{btime}</p>
            </div>
        </div>

    );
};

export default Details;