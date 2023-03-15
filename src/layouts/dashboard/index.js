import React from "react";
import {Box, Divider, IconButton} from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Logo from '../../assets/Images/logo.ico';
import Stack from '@mui/material/Stack';
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";


const DashboardLayout = () => {
  
  const theme = useTheme();
 
  return (
   
    <>
      <Box 
      p={3}
      sx={{
      backgroundColor : theme.palette.background.paper ,
      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
      height: '100vh',
      width:100 ,
    }}>
    <Stack direction="column" alignItems={"center"} sx={{width:"100%"}} spacing={3}>
    <Box sx={{
      backgroundColor : theme.palette.primary.main,
      height: 64,
      width: 64,
      borderRadius:1.5,
    }}>
    <img src={Logo} alt="logo"
     style={{height: 64, width: 64}}/>
    </Box>
    <Stack  
    sc={{width:'max-content'}} 
    direction="column" 
    spacing={3} >
    {Nav_Buttons.map((item) => <IconButton 
      key={item.id}>
      {item.icon}
    </IconButton>)}
   
    <Divider />
      <IconButton>
      <Gear  />
      </IconButton>
     

    </Stack>
    </Stack>    
    </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
