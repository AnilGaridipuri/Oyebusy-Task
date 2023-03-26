import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import "./ProfessionalCleaningServices.css"

;

const Trending1_Services =[
    {
        title:'Professional Deep Cleaning',
        about:'For spring  clean for  end of  lease clean'
    },
    {
        title:'Professional Deep Cleaning',
        about:'For spring  clean for  end of  lease clean'
    },
    {
        title:'Professional Deep Cleaning',
        about:'For spring  clean for  end of  lease clean'
    },
    {
        title:'Professional Deep Cleaning',
        about:'For spring  clean for  end of  lease clean'
    },
]

const Trending_Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div>
                <h1 className='h1-samedayservices'>Trending Services</h1>
                <p className='p-text'>Premium Home Services</p>
            </div>
            <Grid container spacing={2} 
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                {Trending1_Services.map((item) =>{
                    return(
                        <Grid item xs='auto' md='auto'>
                            <Box
                                sx={{
                                    boxShadow: 1,
                                    width: '20rem',
                                    height: '10rem',
                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#531C1C'),
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    fontWeight: '500',
                                    fontSize:'1.0564rem',
                                    paddingbottom:'20px'
                                  }}
                            >
                            </Box>
                            <Grid>
                                <h3 className='h3-title'>{item.title}</h3>
                                <p className='p-about'>{item.about}</p>
                            </Grid>
                        </Grid>
                    )
                })}
          </Grid>
        </Box>
    );
}

export default Trending_Services;