import React from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import AboutMe from './AboutMe';
import Services from './Services'; //removed from portfolio but can be added
import HireMe from './HireMe';
import ContactMe from './ContactMe';
import Footer from './Footer';
import DemoCarousel from './Carousel';
import MyWorks from './MyWorks';

export default class Portfolio extends React.Component {    
    
    render () {
        const logo = 'M.';
        const quote = 'Show me the code.'

        return (
            <div>
                <Header logo={logo} quote={quote}/>
                <Jumbotron />            
                <AboutMe />
                <HireMe />
                <MyWorks />                 
                <DemoCarousel />
                <ContactMe />
                <Footer logo={logo} />
            </div>
        )
    }
}

