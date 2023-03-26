import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white,4),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white,2),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '80%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: '70%',
    // },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const images = [
    {
        url:"Group 7075.png",
        name:"Salon at Home"
    },
    {
        url:"Group 7076.png",
        name:"Electrician",
    },
    {
        url:"Group 7077.png",
        name:"Plumber",
    },
    {
        url:"Group 7078.png",
        name:"CCTV",
    },
    {
        url:"Group 7079.png",
        name:"AC Service",
    },
    {
        url:"Group 7080.png",
        name:"Packers & Movers",
    },
    {
        url:"Group 7081.png",
        name:"Cleaning",
    },
    {
        url:"Group 7082.png",
        name:"House Painting",
    },
    {
        url:"Group 7083.png",
        name:"Home Appliances",
    },
    {
        url:"Group 7084.png",
        name:"Disinfection",
    },
    {
        url:"Group 7085.png",
        name:"Pest Control",
    },
    {
        url:"Group 7086.png",
        name:"Carpenter",
    },

  ]

function Header() {
  return (
    <Box xs={{ flexGrow: 3 }} >
      <Grid container spacing={0}>
        <Grid item ls={0} md={6} xs={12}>
            <div className='Header'>
                <br/><br/><br/><br/>
                <div className='Headertext'>
                    <h1 className='h1-header'>Home services, <br/> on demand</h1>
                </div>
                <br/>
                <div className='Searchbar'>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search for a service"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                    {/* <KeyboardArrowDownIcon/> */}
                </Search>
                </div>
                <Typography className='Exampletext'>
                    <h5 className='Exampletext'>Example: Salon, Women's hair, Men's grooming & Many more..</h5>
                </Typography>
            </div>
        </Grid>
        <Grid item ls={12} md={6} xs={12}>
          <div>
            <h1 className='h1-header'>What are You lookong for?</h1>
          </div>
          <Box>
              <Grid container >
                {images.map((img) => {
                  return(
                    <Grid xs={3}>
                      <div>
                        <img className='headerimgs'
                          src={img.url}
                          alt={img.name}
                          height={30}
                        ></img>
                      </div>
                      <div>
                        <p className='p-heater'>{img.name}</p>
                      </div>
                    </Grid>
                  )
                })}
              </Grid>
          </Box>
          <Box>
            <Grid container spacing={0}>
                <Grid xs='5.6' className='Header1'>
                </Grid>
                <Grid xs='5.6' className='Header2'>
                </Grid>
            </Grid>  
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;