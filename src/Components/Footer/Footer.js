import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Footer.css';
import {ImYoutube,ImLinkedin,ImTwitter,ImInstagram,ImFacebook2} from 'react-icons/im'
import {AiFillInstagram} from "react-icons/ai"
import {SiPicpay} from "react-icons/si"
const Footer = () => {
  return (
    <Box className='Footerbg'>
      <Grid container spacing={0}>
        <Grid ls={12} md={12} xs={12}>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid md='2' xs='3'>
                    <h5>RELATED SERVICES</h5>
                </Grid>
                <Grid md='8' xs='9'>
                    <h5>Electrician  |  Plumber  |  Carpenter  |  Packers & Movers  |  Salon For Woman  |  Salon For Man  |  Electronic Appliances  |  CCTV Installation & Repair  |<br/> Ro- repair & service  |  house Painter  |  Pest Control  |  Kitchen Cleaning  |  Bathroom Cleaning  |  Sofa Cleaning  |  Carpet Cleaning  |  Home Deep Cleaning </h5>
                </Grid>
            </Grid>
            <Grid 
                container
                direction="row"
                justifyContent="center"
            >
                <Grid md='2' xs="3">
                    <h5>TOP LOCATIONS</h5>
                </Grid>
                <Grid md='8' xs="9">
                    <h5>Delhi  |  Gurgaon  |  Noida  |  Ghaziabad  |  Faridhabad  |  Greater Noida </h5>
                </Grid>
            </Grid>
            <Grid 
                container
                direction="row"
                justifyContent="center"
            >
                <Grid md='1.2' xs='3'>
                    <h5>About Us</h5>
                </Grid>
                <Grid md='1.2' xs='3'>
                    <h5>Blog</h5>
                </Grid>
                <Grid md='1.2' xs='3'>
                    <h5>Near me</h5>
                </Grid>
                <Grid md='1.2' xs='3'>
                    <h5>Careers</h5>
                </Grid>
                <Grid md='1.2' xs='3'>
                    <h5>Terms & Conditions</h5>
                </Grid>
                <Grid md='1.2' xs='3'>
                    <h5>Privacy Policy</h5>
                </Grid>
                <Grid md='1.2' xs='3'>
                    <h5>Offers & Gift Cards</h5>
                </Grid>
                <Grid md='1.2' xs='3'>
                    <h5>Contact Us</h5>
                </Grid>
            </Grid>
            <Grid 
                container
                direction="row"
                justifyContent="center"
            >
                <Grid xs='6' md='2'>
                    <h5>Contact Us</h5>
                    <h5>  
                        Phone : +91 9990001089<br/>
                        Email : support@oyebusy.com
                    </h5>
                </Grid>
                <Grid xs='6' md='2'>
                    <h5>Download Oyebusy App</h5>
                    <img src='google-play.png' width={150}/>
                </Grid>
            </Grid>
            <Grid 
                container
                direction="row"
                justifyContent="center"
            >
                <Grid xs='auto'>
                    <div>
                        <br/>
                        <AiFillInstagram className='FooterIcon'/>
                        <ImTwitter className='FooterIcon'/>
                        <ImLinkedin className='FooterIcon'/>
                        <ImFacebook2 className='FooterIcon'/>
                        <ImYoutube className='FooterIcon'/>
                        <SiPicpay className='FooterIcon'/>
                    </div>
                </Grid>
            </Grid>
            <Grid 
                container
                direction="row"
                justifyContent="center"
            >
                <Grid xs='auto'>
                    <h5>© 2021 OyeBusy Technologies Pvt. Ltd.</h5>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
</Box>     
    
)
}

export default Footer