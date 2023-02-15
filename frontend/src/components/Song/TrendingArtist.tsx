import React from 'react';
import ArtistName from '../../assets/ArtistName';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

function TrendingArtist() {


  
   
    return (
        <React.Fragment>
                <TableContainer>
      <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}
      >
     
        <TableBody>
          {ArtistName.map((info: any,index:number) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            
            >
              <TableCell component="th" scope="row">
               <b><h4>{index+1}.</h4></b>
              </TableCell>
              <TableCell align="left"><img src={info.image} width="120%" height="120%" /></TableCell>
              <TableCell align="left"><b><h4>{ArtistName[index].name}</h4></b></TableCell>
            
              <TableCell align="right"><PlayCircleFilledWhiteIcon  fontSize="large"/></TableCell>
    
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </React.Fragment>
    );
}

export default TrendingArtist