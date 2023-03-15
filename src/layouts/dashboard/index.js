import React from "react";
import {Box} from "@mui/material";
import { Outlet } from "react-router-dom";

import { useTheme } from "@mui/material/styles";

const DashboardLayout = () => {

  const theme = useTheme();
  return (
    <>
      <Box sx={{
      backgroundColor : 'theme.palette.background.paper' ,
      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
      height: '100vh',
      width:100 ,
    }}> </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
