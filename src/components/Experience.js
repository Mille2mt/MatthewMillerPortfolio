import React from 'react';
import Card from './Card';

const Experience = () => {
    return (
        <div className='experience'>
            <div className='titleContainer'>
                <h3 className = 'title'>Work Experience</h3>                
            </div>

            <div className='cardContainer'>
                <Card company='Orangetheory Fitness' title='Assistant Studio Manager & Head Coach' location ='Mt. Pleasant, SC' dates='July 2017 - Current' description='Manage and train a team of coaches and sales associates to ensure quality control, efficiently coach high intensity interval, lead and train large group classes, successfully plan and organize studio events'/>
                <Card company='Pivotal Fitness' title='Sales Manager' location ='Charleston, SC' dates='October 2016 - June 2017' description='Effectively generate and manage leads, successfully manage accounts, plan and utilize sales tactics, promote health & fitness'/>
                <Card company='Orangetheory Fitness' title='Sales Associate' location ='Ashburn, VA' dates='April 2016 - September 2016' description='Manage and generate leads, provide outstanding customer service, promote fitness, participate in outreach events, maintain facility equipment '/>
                <Card company='Lucas Therapies, PC' title='Exercise Physiologist' location ='Roanoke, VA' dates='March 2014 - April 2016' description='Lead one-on-one patient exercise program instruction, assist PTs and PTAs, perform pre-employment testing, authorize insurance, maintain facility equipment, perform Cost Reduction Technologies physical testing'/>
            </div>
        </div>
    )
}

export default Experience;