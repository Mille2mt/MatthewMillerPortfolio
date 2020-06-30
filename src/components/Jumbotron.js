import React from 'react';
import Me from '../assets/Me.png'


const Jumbotron = () => (
    <div className='jumbotron row'>
        <div className='jumbotron--info one-half column'>
            <h1>I'm Matthew</h1>
            <h4>Your next entry-level</h4>
            <h4>Web Developer and UI/UX designer.</h4>
            <button className='button'>Hire me.</button>
        </div>
        <div className='jumbotron--image--container one-half column' >
            <img className='myimage' src={Me} alt='img of me' />                                               
        </div>        
    </div>
)


//add functionality to buttons
// const Jumbotron = () => {
//     return (
//         <div className='jumbotron'>
//             <div className='container'>
//                 <div className='jumbotron--container'>
//                     <div className='jumbotron--info'>
//                         <h1>I'm Matthew</h1>
//                         <h4>Your next entry-level</h4>
//                         <h4>Web Developer and UI/UX designer.</h4>
//                         <button className='button'>Hire me.</button>
//                     </div>
//                     <div className='jumbotron--image--container'>
//                         <img className='myimage' src={Me} alt='img of me' />                                               
//                     </div>                                                                                                        
//                 </div>
//             </div>
//         </div>
//     )
// };

export default Jumbotron;