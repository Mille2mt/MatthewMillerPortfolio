import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faGithubSquare, faCodepen } from '@fortawesome/free-brands-svg-icons';

const Header = (props) => {
    return (
        <div className='nav'>
            <div className='container'>
                <div className='nav--container'>
                    <div>
                        <h3 className='nav--logo'>{props.logo}</h3>
                        <h5 className='nav--quote'>{props.quote}</h5>
                    </div>
                    <ul className='footerIconList'>
                        <a href='https://www.facebook.com/matthew.miller91' target='_blank'><FontAwesomeIcon className='socialLink' icon={faFacebookSquare} /></a>
                        <a href='https://www.linkedin.com/in/mille2mt/' target='_blank'><FontAwesomeIcon className='socialLink' icon={faLinkedin} /></a>
                        <a href='https://github.com/Mille2mt' target='_blank'><FontAwesomeIcon className='socialLink' icon={faGithubSquare} /></a>
                        <a href='https://codepen.io/mille2mt' target='_blank'><FontAwesomeIcon className='socialLink' icon={faCodepen} /></a>            
                    </ul>  
                    
                </div>
            </div>
        </div>
    )
}

// <div className='nav--links'>
//     <button className='nav--button'>Home</button>
//     <button className='nav--button'>About me</button>
//     <button className='nav--button'>Experience</button>
//     <button className='nav--button'>Portfolio</button>
//     <button className='nav--button'>Contact me</button>
// </div>

export default Header;