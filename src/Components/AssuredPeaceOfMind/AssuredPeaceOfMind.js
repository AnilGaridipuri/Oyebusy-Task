import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SettingsIcon from '@mui/icons-material/Settings';
import "./AssuredPeaceOfMind.css"
import { imageListClasses } from '@mui/material';

const AssuredPeaceOfMind_items=[
    {
        title:'High Quality Work',
        about:'Only authorized service experts and genuine spare parts and equipments',
        icon:'SettingsIcon'
    },
    {
        title:'Fassle Free',
        about:'Sit back and relax. We do all the work',
        icon:'SettingsIcon'
    },
    {
        title:'Totally Cashless',
        about:'Pay online for Safe & Secure payment Many benefits and offers available with online payment',
        icon:'SettingsIcon'
    }
]

function AssuredPeaceOfMind() {
  return (
    <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#ede9e9'),
        borderRadius: 2,
        textAlign: 'center',
        fontWeight: '500',
        fontSize:'1.0564rem',
        paddingbottom:'20px'
      }}>
      <Grid container spacing={0}>
        <Grid item ls={12} md={12} >
          <div>
            <h1 className='h1-AssuredPeaseText'>Assured Peace Of Mind</h1>
          </div>
              <Grid container spacing={2} 
                  direction="row"
                  justifyContent="center">
                {AssuredPeaceOfMind_items.map((item) => {
                  return(
                    <Grid item xs='auto' md='auto'>
                            <Box
                                sx={{
                                    width: '25rem',
                                    height: '10rem',
                                  }}
                            >
                            <Grid className='AssuredPeaceOfMind'>
                                <div>
                                    <h2><SettingsIcon className='Icon'/></h2>
                                </div>
                                <div className='AssuredPeaceOfMind_text'>
                                    <h3 className='h-AssuredPeaceOfMind'>{item.title}</h3>
                                    <p className='p-AssuredPeaceOfMind'>{item.about}</p>
                                </div>
                            </Grid>
                            </Box>
                        </Grid>
                  )
                })}
              </Grid>
        </Grid>
        </Grid>
    </Box>     
  );
}

export default AssuredPeaceOfMind;