import { Box,Stack} from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { TimeLine,TxtMsg } from './MsgTypes'

const Message = () => {
  return (
    <Box p={3} >
        <Stack spacing={3} >
           {Chat_History.map((el)=>
           {
            switch (el.type){
                case "divider":
                return  <TimeLine el={el}/>
                
              case "msg":
                switch (el.subtype){
                    case "img":
                    //image
                    break;
                    case "doc":
                    //document
                    break;
                    case "Link":
                    //link
                    break;
                    case "reply":
                    //reply 
                    break;
                    default:
                       return <TxtMsg el={el}/>
                   
                }
          break;
            default:
                return <> </>;
            
            }
           }
           )}
        </Stack>

    </Box>
  )
}

export default Message