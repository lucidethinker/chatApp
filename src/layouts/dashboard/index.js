import React from "react";
import {Box, Divider, IconButton,Switch,Avatar} from "@mui/material";
import { styled } from '@mui/material/styles';
import { Outlet } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import Logo from '../../assets/Images/logo.ico';
import Stack from '@mui/material/Stack';
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from '@faker-js/faker';


import useSettings from "../../hooks/useSettings"

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));





const DashboardLayout = () => {
  
  const theme = useTheme();
  const{onToggleMode}=useSettings();

  const [selected, setSelected] = React.useState(0);
  return (
    <>
      <Box 
        p={3}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
          height: '100vh',
          width: 100,
        }}
      >
        <Stack 
        py={3}
        alignItems={"center"}
        justifyContent="space-between"
        sx={{ height: "100%" }}
        >
        <Stack alignItems={"center"} spacing={4}>
        
        <Box 
            sx={{
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img 
              src={Logo} 
              alt="logo"
              style={{height: 64, width: 64}}
            />
          </Box>
          <Stack  
            sx={{width:'max-content'}} 
            direction="column" 
            spacing={3} 
          >
            {Nav_Buttons.map((item) =>( 
              item.index === selected ?
                <Box 
                  key={item.index}
                  sx={{
                    backgroundColor: theme.palette.info.light, 
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton 
                    sx={{width:'max-content', color:'#000'}}
                    onClick={() => setSelected(item.index)}
                  >  
                    {item.icon}
                  </IconButton>
                </Box>
              :
                <IconButton 
                  key={item.index}
                  onClick={() => setSelected(item.index)}
                >
                  {item.icon}
                </IconButton>
            ))}
            <Divider sx={{width:'48px'}}/>
            <IconButton>
              <Gear />
            </IconButton>
          </Stack>
        </Stack>
          
          <Stack spacing={4}> 
          <AntSwitch 
          onChange={()=>{
          onToggleMode();
          }} 
          defaultChecked />
          <Avatar src={faker.image.avatar()} />
          </Stack>
          
        </Stack>    
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
