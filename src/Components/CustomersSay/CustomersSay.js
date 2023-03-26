import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./CustomersSay.css"

;

const MostUsed_Services =[
    {
        name:'Ritu Kumar',
        about:'Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. '
    },
    {
        name:'Ritu Kumar',
        about:'Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. '
    },
    {
        name:'Ritu Kumar',
        about:'Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. '
    },
    {
        name:'Ritu Kumar',
        about:'Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. '
    },
]

const CustomersSay = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div>
                <h1 className='h1-samedayservices'>What our customers say</h1>
            </div>
            <Grid container spacing={2} 
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                {MostUsed_Services.map((item) =>{
                    return(
                        <Grid item xs='auto' md='auto'>
                            <Box
                                sx={{
                                    boxShadow: 10,
                                    width: '22rem',
                                    height: '10rem',
                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                    fontWeight: '500',
                                    fontSize:'1.0564rem',
                                    paddingbottom:'20px'
                                  }}
                            >
                        <Grid>
                            <h1>"</h1>
                            <div className='CustomersSayText'>
                                <p>{item.about}</p>
                                <h4>{item.name}</h4>
                            </div>
                        </Grid>
                            </Box>
                        </Grid>
                    )
                })}
          </Grid>
        </Box>
    );
}

export default CustomersSay;