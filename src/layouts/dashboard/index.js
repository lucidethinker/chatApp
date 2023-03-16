import React from "react";
import {Box, Divider, IconButton} from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Logo from '../../assets/Images/logo.ico';
import Stack from '@mui/material/Stack';
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from '@faker-js/faker';
import { Avatar } from '@mui/material';
const DashboardLayout = () => {
  
  const theme = useTheme();
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
          direction="column" 
          alignItems="center" 
          sx={{width:"100%"}} 
          spacing={3}
        >
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
            sc={{width:'max-content'}} 
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
          <Avatar src={faker.image.avatar()} />
        </Stack>    
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
