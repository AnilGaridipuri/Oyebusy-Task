import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import "./Adds2.css"


function Adds2() {
  return (
    <Box className='Add2bg'>
      <Grid container spacing={0}>
        <Grid ls={12} md={12} xs={12}>
              <Grid container>
                <Grid xs='5' ls='5' md='5' >
                    <div>
                        <img src='Adds_2.jpeg' className='Add2img'/>
                    </div>
                </Grid>
                <Grid  xs='6' ls='6' md='6'> 
                    <div className='Adds2Text'>
                        <h1 className='h1-Adds2'>TRY OUR TRENDING SERVICES WITH UPTO 50% OFF!</h1>
                        <p className='p-Adds2'> ---- On any service you book ----</p>
                        <br/>
                        <Button variant="outlined" className='Abbs2button' color="error">BOOK A SERVICE</Button>
                    </div>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Box>     
  );
}

export default Adds2;