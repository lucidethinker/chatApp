import { IconButton, useTheme } from "@mui/material";
import { Divider, Stack, Typography, Box ,Link} from "@mui/material";
import { Download, Image } from "phosphor-react";
import React from "react";




function Docmsg({el}) {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: 1.5, //1.5*8 = 12px
          width: "max-content",
        }}
      >
        <Stack spacing={2} >
          <Stack p={2} spacing={3} alignItems="center" 
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: 1,
          }}
          >
            <Image size={48}/>
            <Typography variant="subtile2" >
              aa.png
            </Typography>
            <IconButton>
              <Download></Download>
            </IconButton>
          </Stack>
          <Typography variant="body2" sx={{
            color: theme.palette.main,
          }}>
            {el.message}
          </Typography>
        </Stack>

      </Box>
      </Stack>
  )
}


function LinkMessage({el}) {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: 1.5, //1.5*8 = 12px
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack p={2} spacing={3} alignItems="center"
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: 1,
          }}>
        <img src={el.preview} alt={el.message} style={{maxHeight:210,borderRadius:"10px"}}/>
          
          <Stack spacing={2}>
            <Typography variant="subtile2" >
              Creating ChatApp
              </Typography>
              <Typography variant="subtile2"
              sx={{
                color: theme.palette.text,
              }}  
              component={Link}
              to="#">
               www.google.com
              </Typography>
          </Stack>
          
          </Stack>
        </Stack>
        </Box></Stack>
  
  )
}




const ReplyMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: 1.5, //1.5*8 = 12px
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={theme.palette.text}>
            {el.message}
            </Typography>
          </Stack>
      <Typography variant="body2" color={el.incoming?theme.palette.text:"fff"}>
            {el.reply}
      </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

function MediaMsg({ el }) {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: 1.5, //1.5*8 = 12px
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.msg}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography variant="body2" color="#fff">
            {el.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

const TxtMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: 1.5, //1.5*8 = 12px
          width: "max-content",
        }}
      >
        <Typography variant="body2" color="#fff">
          {el.message}
        </Typography>
      </Box>
    </Stack>
  );
};

const TimeLine = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Divider width="46%" />
      <Typography
        variant="caption"
        sx={{
          color: theme.palette.text,
        }}
      >
        {el.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

export { TimeLine, TxtMsg, MediaMsg, ReplyMsg,LinkMessage,Docmsg };
