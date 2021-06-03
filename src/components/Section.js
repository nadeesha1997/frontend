import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../css/Section.css';
import vedio2 from '../Videos/video-2.mp4';


function Section() {
    return (
        <div className='hero-container'>
            <video src={vedio2} autoPlay loop muted />
            <p>FACULTY OF ENGINEERING</p>
            <p>Lecture Schedule Management system</p>

            <p>join with us to get more info</p>

        </div>
    );
}

export default Section;