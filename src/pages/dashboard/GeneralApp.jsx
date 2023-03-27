import React from "react";
import Chats from "./Chats";
import { Stack,Box } from "@mui/material";
import Conversation from "../../components/Conversation";


const GeneralApp = () => {
  return (
    <>
    <Stack direction="row" sx={{width:"100%"}}>
      <Chats />
      <Box sx={{height:"100%",width:"calc(100vw-420px)" ,background:"fff"}}>
    

      </Box>
     
         <Conversation/>

      </Stack>
    </>
  );
};

export default GeneralApp;
