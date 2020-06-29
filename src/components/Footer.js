import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faCodepen } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footerContent'>
                    <h3 className='nav--logo'>{props.logo}</h3>
                    <ul className='footerIconList'>
                        
                        <a href='https://www.linkedin.com/in/mille2mt/' target='_blank'><FontAwesomeIcon className='socialLink' icon={faLinkedin} /></a>
                        <a href='https://github.com/Mille2mt' target='_blank'><FontAwesomeIcon className='socialLink' icon={faGithubSquare} /></a>
                        <a href='https://codepen.io/mille2mt' target='_blank'><FontAwesomeIcon className='socialLink' icon={faCodepen} /></a>            
                    </ul>  
                </div>
            </div>          
        </div>
    )
};

export default Footer;