import React from 'react';
import CreativeMindsPage from '../assets/CreativeMindsPage.png';
import PortfolioPage from '../assets/PortfolioPage.png';
import FRDAccelPage from '../assets/FRDAccelPage.png';

const MyWorks = () => {
    return ( 
        <div className='myworks'>
            <div className='container'>
                <div className='row'>
                    <a href='https://www.creativemindsmtp.com/' target='_blank' className='four columns'> <img className='workscard' src={CreativeMindsPage} /></a>
                    <a href='https://www.MatthewMillerPortfolio.com/' target='_blank' className='four columns'> <img className='workscard' src={PortfolioPage} /></a>
                    <a className='four columns underconstruction'> <img className='workscard' src={FRDAccelPage} /> (Under construction) </a>
                </div>
            </div>
        </div>
     );
}
 
export default MyWorks;