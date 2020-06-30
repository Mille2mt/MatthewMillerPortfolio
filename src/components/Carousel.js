import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from './Card';
 
const DemoCarousel = () => (
    <Carousel showThumbs={false} className='section carousel'>
        <div>
            <Card company='Orangetheory Fitness' title='Assistant Studio Manager & Head Coach' location ='Mt. Pleasant, SC' dates='July 2017 - Current' description='Manage and train a team of coaches and sales associates to ensure quality control, efficiently coach high intensity interval, training group classes, successfully plan and organize studio events'/>
        </div>
        <div>
            <Card company='Pivotal Fitness' title='Sales Associate' location ='Charleston, SC' dates='October 2016 - June 2017' description='Effectively generate and manage leads, successfully manage accounts, plan and utilize sales tactics, promote health & fitness'/>
        </div>
        <div>
            <Card company='Orangetheory Fitness' title='Sales Associate' location ='Ashburn, VA' dates='April 2016 - September 2016' description='Manage and generate leads, provide outstanding customer service, promote fitness, participate in outreach events, maintain facility equipment '/>
        </div>
        <div>
            <Card company='Lucas Therapies, PC' title='Exercise Physiologist' location ='Roanoke, VA' dates='March 2014 - April 2016' description='Lead one on one patient exercise program instruction, assist PTs and PTAs, perform pre-employment testing, authorize Insurance, facility maintenance, CRT testing'/>
        </div>
    </Carousel>
);

export default DemoCarousel;