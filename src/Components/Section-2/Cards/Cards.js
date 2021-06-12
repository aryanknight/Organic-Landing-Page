import React from 'react';
import {Grid} from '@material-ui/core';
import './Cards.css'
import Card1 from '../../asset/grp205.png';
import Card2 from '../../asset/grp207.png';
import Grp39 from '../../asset/grp39.png';
import Grp64 from '../../asset/grp64.png';
import Grp55 from '../../asset/grp55.png';

export default function Cards({no}){
    if(no==1){
    return(
        <div className='cardcontainer'>
        <Grid container spacing={2} justify='space-between'>
            <Grid item md={3} sm={6} xs={12} align='center'>
                <img src={Card2} />
            </Grid>
            <Grid item md={3} sm={6} xs={12} align='center'>
                <img src={Card1} />
            </Grid>
            <Grid item md={3} sm={6} xs={12} align='center'>
                <img src={Card2} />
            </Grid>
            <Grid item md={3} sm={6} xs={12} align='center'>
                <img src={Card2} />
            </Grid>
        </Grid>
        </div>
    )}else{
        return(
            <div className='cardcontainer2'>
            <Grid container spacing={3} justify='space-between'>
                <Grid item md={2} sm={4} xs={12} align='center'>
                    <img src={Grp39} />
                </Grid>
                <Grid item md={2} sm={4} xs={12} align='center'>
                    <img src={Grp64} />
                </Grid>
                <Grid item md={2} sm={4} xs={12} align='center'>
                    <img src={Grp55} />
                </Grid>
                <Grid item md={2} sm={6} xs={12} align='center'>
                    <img src={Grp64} />
                </Grid>
                <Grid item md={2} sm={6} xs={12} align='center'>
                    <img src={Grp64} />
                </Grid>
            </Grid>
            </div>
        )
    }
};