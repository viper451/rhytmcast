import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from "react-router-dom";
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import { styled, useTheme } from "@mui/material/styles";


function LeftNavbhar() {
    const drawerWidth = 240;
    const drawerHeight=100;
    const theme = useTheme();
  const duration = 214; // seconds
  const [position, setPosition] = useState(32);
  const [paused, setPaused] = useState(false);
  const [loading, setLoading] = useState(false);
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
    const Widget = styled("div")(({ theme }) => ({
        padding: 16,
        borderRadius: 16,
        width: 343,
        maxWidth: "100%",
        margin: "auto",
        position: "relative",
        zIndex: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
        backdropFilter: "blur(40px)"
      }));
      
      const CoverImage = styled("div")({
        width: 100,
        height: 100,
        objectFit: "cover",
        overflow: "hidden",
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: "rgba(0,0,0,0.08)",
        "& > img": {
          width: "100%"
        }
      });
      
      const TinyText = styled(Typography)({
        fontSize: "0.75rem",
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2
      });

      const navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate('/home');
  }
  
      


    return (
 
 
        <Box >
    
    
      <Drawer
      
         
        sx={{
          backgroundColor:'pink',
          width: drawerWidth,
          height:drawerHeight,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            color:'white',
            width: drawerWidth,
            boxSizing: 'border-box',
        
          },
        }}
        variant="permanent"
        anchor="left"
        PaperProps={{
            sx: {
              backgroundColor: "black",
              color: "red",
            }
          }}
       
        
        
      >
       
        <List>
        <h2 style={{textAlign:"center",color:"white",paddingBottom:"30px",paddingTop:"15px"}}> <LibraryMusicRoundedIcon/> RhythmCast </h2>
          
          
              <ListItemButton onClick={routeChange}>              
              <HomeIcon /> <ListItemText primary="Home"  style={{textAlign:"center"}}/>       
              </ListItemButton>
              <ListItemButton>              
              <SearchIcon /> <ListItemText primary="Search" style={{textAlign:"center"}} />   
              </ListItemButton>
              <ListItemButton>              
              <LibraryAddIcon/> <ListItemText primary="Library" style={{textAlign:"center"}} />      
              </ListItemButton>
      
        </List>
        
        <Divider style={{ background: 'white' }} variant="middle" />
        <h6 style={{padding:"10%"}}>Song</h6>
        <Box sx={{ width: "100%", overflow: "hidden" ,padding:"6%"}}>
      <Widget>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CoverImage>
            <img
              alt="can't win - Chilling Sunday"
              src="/images/RRR.png"
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography
              variant="caption"
              color="white"
              fontWeight={500}
            >
              ○ Vishal Mishra
            </Typography>
            <Typography noWrap style={{fontSize:"10px"}}>
              <b> NACHO NACHO </b>
            </Typography>
            <Typography noWrap letterSpacing={-0.25}>
              RRR 
            </Typography>
          </Box>
        </Box>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value:any) => setPosition(value)}
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "rgba(20,20,20,20.87)",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&:before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)"
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === "dark"
                    ? "rgb(255 255 255 / 16%)"
                    : "rgb(0 0 0 / 16%)"
                }`
              },
              "&.Mui-active": {
                width: 20,
                height: 20
              }
            },
            "& .MuiSlider-rail": {
              opacity: 0.28
            }
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1
          }}
        >
          <IconButton aria-label="previous song">
            <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <PlayArrowRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>
          <IconButton aria-label="next song">
            <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
        </Box>
        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1, px: 1 }}
          alignItems="center"
        >
          <VolumeDownRounded htmlColor={lightIconColor} />
          <Slider
            aria-label="Volume"
            defaultValue={30}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              "& .MuiSlider-track": {
                border: "none"
              },
              "& .MuiSlider-thumb": {
                width: 24,
                height: 24,
                backgroundColor: "#fff",
                "&:before": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)"
                },
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none"
                }
              }
            }}
          />
          <VolumeUpRounded htmlColor={lightIconColor} />
        </Stack>
      </Widget>
    </Box>
       
      </Drawer>
     
    </Box>

    );
}

export default LeftNavbhar;