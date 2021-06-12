import React from 'react';
import {Container, Grid} from '@material-ui/core';
import leafimg from '../asset/grp114.png';
import Cards from './Cards/Cards';
import './Section_2.css';

export default function Section_2(){
return(<>

    <div className='section2container1'>
        <Grid container justify='center' direction='column' spacing={3} style={{maxWidth:'100%'}}>     
            <Grid item align='center' md={12}>
                <img src={leafimg}/>
            </Grid>
            
            <Grid item align='center' md={12}>
                <div className='heading'>Welcome to Nature</div>
            </Grid>
            
            <Grid item align='center' md={12}>
                <div className='para'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </Grid>            
        </Grid>
        <Cards no={1} style={{maxWidth:'95%'}}/>
       </div>
       
    <div className='section2container2' style={{maxWidth:'100%'}}>
       <Grid container justify='center' direction='column' spacing={3} style={{maxWidth:'98%'}}>   
           
           <Grid item align='center' md={12}>
               <div className='heading'>Proudly Presented By</div>
           </Grid>
           
           <Grid item align='center' md={12}>
               <div className='para'>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                       incididunt ut labore et dolore magna aliqua.</p>
               </div>
           </Grid>            
       </Grid>
       <Cards no={2}/>
       <div className='dots'>
           <div className='dot'></div>
           <div className='dot'  style={{backgroundColor:'#00dbd0'}}></div>
           <div className='dot'></div>
           <div className='dot'></div>
       </div>
    </div>
</>)
};