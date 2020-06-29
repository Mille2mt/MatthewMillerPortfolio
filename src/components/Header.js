import React from 'react';

const Header = (props) => {
    return (
        <div className='nav'>
            <div className='container'>
                <div className='nav--container'>
                    <div>
                        <h3 className='nav--logo'>{props.logo}</h3>
                        <h5 className='nav--quote'>{props.quote}</h5>
                    </div>
                    <div className='nav--links'>
                        <button className='nav--button'>Home</button>
                        <button className='nav--button'>About me</button>
                        <button className='nav--button'>Experience</button>
                        <button className='nav--button'>Portfolio</button>
                        <button className='nav--button'>Contact me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;