import React from 'react';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import VisibilitySensor from 'react-visibility-sensor';


export default class AboutMe extends React.Component {    

    render () {

    const animation = () => (
        <Typist avgTypingDelay={150}>
            <Typist.Delay ms={1000} />
                JavScrip
            <Typist.Backspace count={5} delay={400} />
                aScript &      
        </Typist>
    );
    
    return (
        <div className='aboutme'>
            <div className='container'>
                <div className='aboutme--container'>
                    <div>
                        <h4 className='aboutMeTitle'>About Me</h4>
                    </div>
                    <div className='aboutme--info'>
                        <p>With almost a decade of experience in the fitness and rehab industry, I have decided to take a leap of faith and make a career change to the world of IT. I find it absolutely fascinating but also stable with a nearly unlimited ceiling. Although I don't have any direct experience in the field, I have always been the one people reach out to when they need computer help and I believe I am naturally tech savvy.  The past four years I have spent teaching myself the basics of: </p>

                        <ul className='techList'>
                            <li className='myHTML'>HTML,</li>
                            <li><span className='myC'>C</span><span className='myS1'>S</span><span className='myS2'>S</span>,</li>
                                            
                            <VisibilitySensor>
                                {({isVisible}) =>
                                    <div>{isVisible ? animation() : '|'}</div>
                                }
                            </VisibilitySensor>
                                                    
                            <li><FontAwesomeIcon  className='myReact' icon={faReact} /> React</li>
                        </ul>
                                                
                        <p>I would love to learn more about back-end technologies as well but I decided it would be best to learn front end first and expand my knowledge over time!</p>
                    </div>
                </div>                
            </div>
        </div>
        )
    }
};