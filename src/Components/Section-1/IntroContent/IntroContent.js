import React from "react";
import { Grid , Button} from "@material-ui/core";
import Img1 from '../../asset/grp222.png';
import Img2 from '../../asset/grp195.png';
import "./IntroContent.css";

export default function IntroContent() {
  return (
    <div className='content'>
      <Grid container justify='center'>
          
          <Grid item md={6}  align='center' sm={12}>
            <div className='content-container'>            
              <div className='heading-1'>Healty life with</div>
              <div className='heading-2'>Nature Organic</div>
              <p >Vegetables are the edible parts of a plant 
                that is used in cooking or can be eaten now.</p>
              <button >Explore Now</button>
            </div>  
          </Grid>
          
          <Grid item md={6} align='center' sm={12} >
            <div className='image-container'>
              <img src={Img1} className='image1'/>
              <img src={Img2} className='image2'/>
            </div>
          </Grid>
      </Grid>
    </div>
  );
}
