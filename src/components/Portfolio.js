import React from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import AboutMe from './AboutMe';
import Services from './Services'; //removed from portfolio but can be added
import Experience from './Experience';
import HireMe from './HireMe';
import ContactMe from './ContactMe';
import Footer from './Footer';

export default class Portfolio extends React.Component {    
    
    render () {
        const logo = 'M.';
        const quote = 'Show me the code.'

        return (
            <div>
                <Header logo={logo} quote={quote}/>
                <Jumbotron />
                <AboutMe /> 
            
                
                              
            </div>
        )
    }
}



        
// <HireMe />    
// <Experience />                
// <ContactMe />
// <Footer logo={logo} />  