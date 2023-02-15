import React,{useState,useEffect} from 'react';
import SongCard from './SongCard';
import './SongCard.css'
import Grid from '@mui/material/Grid';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';



function Song() {
    const [Songs, setSongs] = useState([])

    const [AddFavorite, setAddFavorite] = useState<any[]>([])


    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
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
      color: 'pink',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    }));

    const fetchSongDetail=async ()=>{
   

      let response = await fetch(`http://api.napster.com/v2.2/playlists/featured?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
         
        })
                       let data = await response.json()
                        // console.log(data.playlists)
                       setSongs(data.playlists)
                        console.log(Songs)
      
    
      }

      const addFavorite=(info: any)=>{
        console.log(info)
      }


 
      const FavouriteAddedSong=async (info: any)=>{
        let index=AddFavorite.length+1
        //  AddFavorite.push(info)
          
        setAddFavorite([...AddFavorite, {info}]);
        //  const newArray = [...AddFavorite];
        //  newArray[index] = { ...newArray[index], info: info };
        //  setAddFavorite(newArray);
    
         console.log(AddFavorite)
      }





    useEffect(() => {
        
        fetchSongDetail()
    }, [])
    return (
   
            <React.Fragment>   
     
        <Toolbar>
    
        
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>

  
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>



            { Songs.map((info: any) => 
            (
              
                <Grid item xs={4}>
              <SongCard info={info}    />
              </Grid>
        ))}
            </Grid>
           
            </React.Fragment>  
    );
}

export default Song;