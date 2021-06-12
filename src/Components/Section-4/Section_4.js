import React from 'react';
import {Grid} from '@material-ui/core';
import Grp90 from '../asset/grp90.png';
import Grp91 from '../asset/grp91.png';
import Grp92 from '../asset/grp92.png';
import './Section_4.css';

export default function Section_4() {

    const cardData=[{image:Grp90},{image:Grp91},{image:Grp92}];
    return (
        <div style={{maxWidth:'100%',marginTop:'80px'}}>
            
            <Grid container justify='space-around' >
                {cardData.map(element=>{return(
                <Grid item md={4} align='center' sm={6} xs={12}>
                    <div className='cardcontainer1' >
                        <img className='cardimages' src={element.image}/>
                        <p className='cardtitle'>Blog Post One</p>
                        <div className='cardpara'>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed
                            do eiusmod.</div>
                        <div style={{marginTop:'12px'}} className='cardpara'> <b>Read More</b></div>
                        <div style={{height:'2px',width:'36px',backgroundColor:'#00dbd0' , marginTop:'12px'}}></div>
                    </div>
                </Grid>
                )})}
            </Grid>

        </div>
    )
}
