import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./HomeApplicationServices.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1345df' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomeApplicationServices_images =[
    {
        url:'Group 11.png',
        name:'Air-Conditioner Services',
        height:'100'
    },
    {
        url:'Group 12.png',
        name:'AC Installation',
        height:'100',
    },
    {
        url:'Group 13.png',
        name:'Sofa Cleaning Service',
        height:'100',
        width:'120'
    },
    {
        url:'Group 14.png',
        name:'Home Deep Cleaning Service',
        height:'100',
    },
    {
        url:'Group 15.png',
        name:'Sofa Cleaning Service',
        height:'100',
        width:'120'
    },
    {
        url:'Group 2.png',
        name:'Home Deep Cleaning Service',
        height:'90',
        width:'120'
    },
]

const HomeApplicationServices = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className="HomeApplicationText">
                <h1 className='h1-HomeApplication'>Home Application Services</h1>
                <p className='p-text'>Premium Home Services</p>
            </div>
            <Grid container spacing={5} 
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  {HomeApplicationServices_images.map((img) =>{
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
                              <img className='HomeApplicationImg'
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

export default HomeApplicationServices;