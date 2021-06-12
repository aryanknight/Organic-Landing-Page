import React from 'react';
import Grp229 from '../asset/grp229.png';
import Grp225 from '../asset/grp225.png';
import './Section_5.css';


export default function Section_5() {
    return (
        <div className='footercontainer'>
            
            <div className='footercontent'>
                <div className='content1'>
                    <img src={Grp225} />
                    <p style={{lineHeight:'1.31',textAlign:'left' ,marginTop:'40px' ,color:'white'}}> Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor </p>
                    <p style={{textAlign:'left' ,marginTop:'10px' ,color:'white'}}><b>© Copyright 2020 Nature</b></p>
                </div>
                
                
                <div className='content1' id="content2">
                    <p style={{textAlign:'left' ,marginTop:'10px' ,color:'white'}}><b>Information</b></p>
                    <div style={{textAlign:'left' ,marginTop:'10px' ,color:'white',fontFamily:'Roboto'}}>About Us </div>
                    <div style={{textAlign:'left' ,marginTop:'10px' ,color:'white',fontFamily:'Roboto'}}>Products </div>
                    <div style={{textAlign:'left' ,marginTop:'10px' ,color:'white',fontFamily:'Roboto'}}>Contact Us </div>
                    <div style={{textAlign:'left' ,marginTop:'10px' ,color:'white',fontFamily:'Roboto'}}>Terms of Services </div>
                </div>
            </div>
        </div>
    )
}
