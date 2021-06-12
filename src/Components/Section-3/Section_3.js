import React from 'react';
import Grp134 from '../asset/grp134.png';
import Grp86 from '../asset/grp86.png';
import Grp114 from '../asset/grp114.png';
import WomanImg from '../asset/woman.png';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import './Section_3.css';


export default function Section_3(){
    return(
        <div className='section3container'>
           
            <img src={Grp134} className='leafimg'/>
           
            <img src={Grp86}/>
           
            <div  className='imagecontainer'>
                <img src={WomanImg}/>
            </div>
           
            <div className='name'>
                Jane Doe
            </div>
           
            <div className='rating'>
                <StarBorderIcon/>
                <StarBorderIcon/>
                <StarBorderIcon/>
                <StarBorderIcon/>
                <StarBorderIcon/>
            </div>
           
            <p>
                Thank you for all the amazing produce and products you deliver each week…
                you make my life so easy an bring goodness into our family eating. 
                I’ve been roasting a lot of brussel sprouts and
            </p>
            
            <div className='dots1'>
                <div className='dot1' style={{backgroundColor:'#00dbd0'}}></div>
                <div className='dot1'></div>
                <div className='dot1'></div>
                <div className='dot1'></div>
            </div>

            <div className='heading' style={{marginTop:"207px",padding:'10px'}}>Subscribe to Our Newsletter</div>
            <p style={{lineHeight:'1.31',padding:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
               incididunt ut labore et dolore magna aliqua.</p>
            <div style={{marginTop:'66px'}}>
                <input type='email' placeholder='Enter your Email' />
                <button className='emailbutton'>Subscribe</button>
            </div>

            <img src={Grp114} style={{marginTop:'117px'}} />
            <div className='heading' style={{marginTop:"15px",padding:'10px'}}>Read Our Blog</div>
            <p style={{lineHeight:'1.31', padding:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
               incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
};