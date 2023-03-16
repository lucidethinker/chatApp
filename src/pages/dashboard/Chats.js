import{Box ,
      IconButton,
      Stack,
      Typography,
      InputBase,
      Badge,
      Button,
      Divider,
      Avatar } from '@mui/material'
import React from 'react'
import { CircleDashed,MagnifyingGlass,ArchiveBox } from 'phosphor-react'
import { styled, alpha } from '@mui/material/styles';
import { faker } from '@faker-js/faker';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));







const ChatElement = () =>
{
  return(
    <Box sx={{
      width:"100%",
      height:60,
      borderRadius:1,
      backgroundColor:"white"
      }}
      p={2} 
      >
        <Stack direction='row' alignItems={"center"} justifyContent="space-between" spacing={2}>
        <StyledBadge 
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        >
          <Avatar src={faker.image.avatar()}/>
          </StyledBadge>
          </Stack>

       

         
      </Box>
  )
  
}


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));





function Chats() {
  


  return (
    <Box   
    sx={{
    position:"relative",
    height:"100vh",
    width:320,
    backgroundColor:"#F8FAFF",
    boxShadow:'0px 0px 2px rgba(0,0,0.25)'}}>
    
    <Stack p ={3} spacing={2}>
    <Stack
       direction="row"
        alignItems="center"
         justifyContent="space-between">
      <Typography 
      variant="h5" 
      >
      Chats
      </Typography>
      
      <IconButton>
      <CircleDashed size={32} />
      </IconButton>
      </Stack>
        <Stack sx={{width:"100%"}}>
             <Search>
             <SearchIconWrapper>
       <MagnifyingGlass color="black" />
       </SearchIconWrapper >
       <StyledInputBase placeholder="Search ... "/>
             </Search>
       </Stack>
       <Stack spacing={1}>
      <Stack direction='row' alignItems={"center"} spacing={1.5}>
         
      <ArchiveBox size={24} />
      <Button>Archived</Button>
        
        </Stack>
          <Divider/>
       </Stack>

        <Stack direction="column">
          <ChatElement/>
          </Stack>

    </Stack>
    
    
    </Box>
   
  )
}

export default Chats