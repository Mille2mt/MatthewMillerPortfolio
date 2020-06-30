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
        <div className='section aboutme'>
            <div className='container'>
                <div className='row u-full-width'>
                    <p>With almost a decade of experience in the fitness and rehab industry, I have decided to take a leap of faith and make a career change to the world of IT. I find it exciting and challenging, while also stable with immense opportunities for personal and career growth. Thoughout the years, I have always been deemded the in-house tech guy as I am naturally technologically savvy. Through experience, this has made me realize my worth and potential and has motivated me to make this career change. I am ecstatic to get into the field and show the world what I am capable of. I am self-taught in the basics of: </p>
    
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
                    <p>I look to continue learning past front end tech. Back end technologies have really caught my eye through my years of learning and I am eager to learn Node.js. I have heard considerable things about Mongo as well as Express and I aspire to be your next full stack developer. </p>    
                </div>
            </div>
        </div>
        )
    }
};

//removed and updated for mobile responsivity
// <div className='aboutme'>
//     <div className='container'>
//         <div className='aboutme--container'>
//             <div className='aboutme--info'>
//                 <p>With almost a decade of experience in the fitness and rehab industry, I have decided to take a leap of faith and make a career change to the world of IT. I find it absolutely fascinating but also stable with a nearly unlimited ceiling. Although I don't have any direct experience in the field, I have always been the one people reach out to when they need computer help and I believe I am naturally tech savvy.  The past four years I have spent teaching myself the basics of: </p>

//                 <ul className='techList'>
//                     <li className='myHTML'>HTML,</li>
//                     <li><span className='myC'>C</span><span className='myS1'>S</span><span className='myS2'>S</span>,</li>
                                    
//                     <VisibilitySensor>
//                         {({isVisible}) =>
//                             <div>{isVisible ? animation() : '|'}</div>
//                         }
//                     </VisibilitySensor>
                                            
//                     <li><FontAwesomeIcon  className='myReact' icon={faReact} /> React</li>
//                 </ul>
                                        
//                 <p>I would love to learn more about back-end technologies as well but I decided it would be best to learn front end first and expand my knowledge over time!</p>
//             </div>
//         </div>                
//     </div>
// </div>