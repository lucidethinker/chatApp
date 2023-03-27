import { Stack,Box } from '@mui/material'
import React from 'react'

function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
    <Box sx={{
        height:100,
        width:"100%",
        backgroundColor:"#F8FAFF",
        boxShadow:"0px 0px 2px rgba(0,0,0.25)"

    }}>

    </Box>
     
     <Box width={"100%"} sx={{ 
        flexGrow:1,
     }}></Box>



    <Box sx={{
        height:100,
        width:"100%",
        backgroundColor:"#F8FAFF",
        boxShadow:"0px 0px 2px rgba(0,0,0.25)"

    }}>
        </Box>
    </Stack>
  )
}

export default Conversation