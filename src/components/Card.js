import React from 'react';

const Card = (props) => (
    <div className = 'card'>
        <div className = 'cardTitle'>
            <h2>{props.company}</h2>
            <h6>{props.location}</h6>
        </div>
        <div className = 'cardSubtitle'>
            <span className='showing'>
                <p><strong>{props.title}</strong></p>
                <br />        
                <p>{props.dates}</p>
            </span>
            <span className = 'notShowing'>
                <p>{props.description}</p>
            </span>        
        </div>
    </div>    
)

export default Card;