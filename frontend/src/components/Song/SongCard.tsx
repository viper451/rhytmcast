import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import ShareIcon from '@mui/icons-material/Share';
import './SongCard.css'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';



function SongCard(info:any) {
 
   const [Favourite, setFavourite] = useState(false)

  //  const [items, setItems] = useState<any[]>([]);
//    const [employee, setEmployee] = 
// useState<{[key: string]: any}>({});
let myArray: any[] = [];


  const ChangeFavourite=()=>{
    console.log("HEELO")
      setFavourite(!Favourite)
  } 



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
    color: 'inherit',
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
  // function FavouriteAddedSong(info: any) {
  //   throw new Error('Function not implemented.');
  // }

    return (
  <React.Fragment>
                <Card  style={{ maxWidth: '15rem',minHeight:'25rem',maxHeight:'25rem',display:"flex",flexDirection:"column",background: 'linear-gradient(to right, #000000, #E84393)'}}>
      <Card.Img variant="top" src={info.info.images[0].url} style={{padding:"2%"}}/>
      <Card.Body>
        <Card.Title style={{color:"white"}}><b>{info.info.name} </b></Card.Title>
        <Card.Text style={{color:"white",minHeight:"8rem"}}>
             {info.info.description}
        </Card.Text>
        {!Favourite ?(
     <><FavoriteTwoToneIcon onClick={() => {ChangeFavourite()}} style={{ color: "pink" }} /> &nbsp;</>):
     <><FavoriteIcon onClick={() => ChangeFavourite()} style={{ color: "pink" }} /> &nbsp;</>
     
     }
      < ShareIcon style={{ color: "white" }} />  
    
      </Card.Body>
    </Card>
    </React.Fragment>
      
    );
}

export default SongCard;