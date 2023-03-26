import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./Adds.css"
import CircleIcon from '@mui/icons-material/Circle'

const Adds = () => {
  return (
    <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center">
            <Grid item xs='11' ls='9' md='7' sm='9'>
                <Box 
                    sx={{
                        boxShadow: 4,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#ECECEE'),
                        borderRadius: 5,
                        height:'8rem'
                    }}
                >
                <div className='ListItems'>
                    <div>
                        <Grid xs='12'>
                            <h1 className='h1-Adds'>100% Safe Services</h1>
                        </Grid>
                        <Grid container className='items'>
                            <Grid xs='5'>
                                <li>Masks</li>
                            </Grid>
                            <Grid xs='7'>
                                <li>Temperature Checks</li>
                            </Grid>
                            <Grid xs='5'>
                                <li>Gloves</li>
                            </Grid>
                            <Grid xs='7'>
                                <li>Sanitized Tools</li>
                            </Grid>
                        </Grid>
                    </div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                    <div className='float-right'>
                        <img src='Adds_1.png' alt='Adds'  height = "125"/>
                    </div>
                </div>
                </Box>
            </Grid>
        </Grid>
)}

export default Adds;
