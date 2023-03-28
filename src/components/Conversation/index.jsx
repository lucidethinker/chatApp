import { faker } from "@faker-js/faker";
import {
  Stack,
  Box,
  Avatar,
  Badge,
  Typography,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Phone,
  VideoCamera,
  MagnifyingGlass,
  CaretDown,
  LinkSimple,
  Smiley,
  PaperPlane,
} from "phosphor-react";
import Header from "./Header";
import Footer from "./Footer";




function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      <Header/>
      <Box
        width={"100%"}
        sx={{
          flexGrow: 1,
        }}
      ></Box>
      <Footer/>
      
    </Stack>
  );
}

export default Conversation;
