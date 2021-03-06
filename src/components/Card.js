import React, { useState} from 'react'
import './Card.css';

function Card({name, job, about}) {


    return (
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src="https://i.pinimg.com/originals/61/ab/18/61ab18adea60cfb80cf1231d9c0bbf36.jpg" alt="" height="100px" width="100px"/>       
                </div>
            </div>    
            
            <div className="lower-container">
                <h3>{ name }</h3>
                <h4>{ job }</h4>
                <p>{ about }</p>
                <button><a href="https://github.com/martinigonsalvess/componentsCard">See my github</a></button>
            </div>
        </div>
    )
}

export default Card
