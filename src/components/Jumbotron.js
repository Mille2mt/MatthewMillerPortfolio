import React from 'react';
import Me from '../assets/Me.png'

//add functionality to buttons
const Jumbotron = () => {
    return (
        <div className='jumbotron'>
            <div className='container'>
                <div className='jumbotron--container'>
                    <div className='jumbotron--info'>
                        <h1>I'm Matthew</h1>
                        <h4>Your next entry-level Web Developer and UI/UX designer.</h4>
                        <button className='button'>Hire me.</button>
                    </div>
                    <div className='jumbotron--image--container'>
                        <img className='myimage' src={Me} alt='img of me' />
                                               
                    </div>                                                                                                        
                </div>
            </div>
        </div>
    )
};

// <img className='myimage'src={Me} alt='img of me'/>
// <img src={Circles} alt='circles'/>


export default Jumbotron;