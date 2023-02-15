import React from 'react';
import Font from 'react-font';
import Typography from '@mui/material/Typography';
import Navbhar from '../Navbar/Navbar';
import LeftNavbhar from '../Song/LeftNavbhar';
import Grid from '@mui/material/Grid';
import SongCard from '../Song/SongCard';
import PlayListSongs from '../../assets/PlayList';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import './PlayList.css'
import { Container } from '@mui/material';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function PlayList() {
    return (
        <React.Fragment>
             <Navbhar/>
             <LeftNavbhar/>
          
             <Font family='Lobster'>
          <Typography  color="white" fontFamily="Lobster" fontSize="50px" style={{'textAlign': 'center',marginTop:"-70px"}}>
          PLAYLIST
       
    <div> 
      <Button variant="contained"  startIcon={<QueueMusicIcon />}  style={{'textAlign': 'center',marginTop:"-20px",backgroundColor: 'grey'}}>
        Create New Playlist
      </Button><br/> <br/>
    <h1 >CURRENT PLAYLIST</h1>
</div>
<br/><br/>
     

<Table>
    
   
 
      <Tbody>

 { PlayListSongs.map((info: any,index:number) => 
(


                 <Tr>
              <Td>{index+1}</Td>
              <Td ><img src={info.image} width="10%" height="10%"  /></Td>
              <Td>{PlayListSongs[index].name} </Td>
            
              <Td><PlayCircleFilledWhiteIcon  fontSize="large"/></Td>
              </Tr>
             

))} 
 </Tbody>
   </Table>





          </Typography>
          </Font>
        </React.Fragment>
    );
}

export default PlayList