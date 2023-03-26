import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./SmaeDayServices.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1345df' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SmaeDayServices_Images =[
    {
        url:'Group 5.png',
        name:'Carpentery Services'
    },
    {
        url:'Group 6.png',
        name:'Plumbing Services'
    },
    {
        url:'Group 7.png',
        name:'Electricalb Services'
    },
    {
        url:'Group 8.png',
        name:'Painting Service'
    },
    {
        url:'Group 9.png',
        name:'Pest Control Service'
    },
]

const SmaeDayServices = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className="SmaeDayServicesText">
                <h1 className='h1-samedayservices'>Same Day Services</h1>
                <p className='p-text'>Premium Home Services</p>
            </div>
            <Grid container spacing={2} 
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                {SmaeDayServices_Images.map((img) =>{
                    return(
                        <Grid item xs='auto' md='auto'>
                            <Box
                                sx={{
                                    boxShadow: 4,
                                    width: '105px',
                                    height: '10rem',
                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    fontWeight: '500',
                                    fontSize:'1.0564rem',
                                    paddingbottom:'20px'
                                  }}
                            >
                              <img className='smaedayimg'
                                  src={img.url}
                                  alrt={img.name} 
                                  height={130}
                              />
                              <p>{img.name}</p>
                            </Box>
                        </Grid>
                    )
                })}
          </Grid>
        </Box>
    );
}

export default SmaeDayServices