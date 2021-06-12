import React from "react";
import { Grid } from "@material-ui/core";
import "./NavBar.css";
import organicLogo from "../../asset/grp220.png";

export default function NavBar() {
  return (
      <Grid container justify="center" alignItems='center'>
        <Grid item md={6} sm={12} xs={12} align="center">
          <div className='sideleft'>
              <img src={organicLogo} className="organicLogo" />
              <div className="organic">Organic</div>
          </div>    
        </Grid>
        
        <Grid item md={6}  align='right'>
          <div className='menu'>
            <div className='menuitem'>Home</div>
            <div className='menuitem'>Products</div>
            <div className='menuitem'>Blog</div>
            <div className='menuitem'>About Us</div>
            <div className='menuitem'>Contact</div>
          </div>
        </Grid>
      </Grid>
  );
}
