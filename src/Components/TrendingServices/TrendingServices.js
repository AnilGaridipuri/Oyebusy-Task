import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./TrendingServices.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1345df' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Trending_images =[
    {
        url:'Group 1.png',
        name:'Air-Conditioner Services',
        height:'100'
    },
    {
        url:'Group 2.jpeg',
        name:'AC Installation',
        height:'80',
        width:'150'
    },
    {
        url:'Group 3.jpeg',
        name:'Sofa Cleaning Service',
        height:'100',
        width:'150'
    },
    {
        url:'Group 4.jpeg',
        name:'Home Deep Cleaning Service',
        height:'100',
    },
]

const TrendingServices = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className="trendingText">
                <h1 className='h1-Trending'>Trending Services</h1>
                <p className='p-text'>Premium Home Services</p>
            </div>
            <Grid container spacing={5} 
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  {Trending_images.map((img) =>{
                    return(
                        <Grid item xs='auto' ls='auto' md='auto'>
                            <Box
                                sx={{
                                    boxShadow: 4,
                                    width: '10rem',
                                    height: '8rem',
                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    fontWeight: '500',
                                    fontSize:'1.0564rem'
                                  }}
                            >
                              <img className='Trendingimg'
                                  src={img.url}
                                  alrt={img.name} 
                                  height={img.height}
                                  width={img.width}
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

export default TrendingServices