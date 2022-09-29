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
            <div className='info-call'>
                <h2>Raihan sarkar</h2>
                <div className='info'>
                    <h4>75kg</h4>
                    <h4>6.5</h4>
                    <h4>25</h4>
                </div>

            </div>

            <div className='detail-inf'>
                <h3>details</h3>
                <p>Exercise requirment:  {time}</p>
            </div>

            <div className='btn-click'>
                <button onClick={() => onClickf(10)} className='btn-design'>10</button>
                <button onClick={() => onClickf(20)} className='btn-design'>20</button>
                <button onClick={() => onClickf(30)} className='btn-design'>30</button>
                <button onClick={() => onClickf(40)} className='btn-design'>40</button>
            </div>
            < div className='bt'>

                <p>Break time:{btime}</p>
            </div>
            <div className='qsn'>
                <a target="_blank" href='q'>Question</a>
            </div>
        </div>

    );
};

export default Details;