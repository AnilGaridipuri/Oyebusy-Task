import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AdjustIcon from '@mui/icons-material/Adjust';
import "./ChooseUs.css"


function ChooseUs() {
  return (
    <Box className='ChooseUsbg'>
      <Grid container spacing={0}>
        <Grid ls={12} md={12} xs={12}>
              <Grid container>
                <Grid xs='6' ls='3' md='5' >
                    <div>
                        <img src='ChooseUs.png' className='ChooseUsImg'/>
                    </div>
                </Grid>
                <Grid  xs='6' ls='8' md='7'> 
                    <div>
                        <h1 className='h1-ChooseUsText'>Why Choose Us?</h1>
                        <div className='p-ChooseUsText'>
                            <h5><AdjustIcon fontSize='mediam'/> 30 days service guarantee</h5>
                            <h5><AdjustIcon fontSize='mediam'/> Affordable Rates</h5>
                            <h5><AdjustIcon fontSize='mediam'/> On Time Service</h5>
                            <h5><AdjustIcon fontSize='mediam'/> Verified Professionals</h5>
                            <h5><AdjustIcon fontSize='mediam'/> Excellent Service</h5>
                        </div>
                    </div>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Box>     
  );
}

export default ChooseUs;