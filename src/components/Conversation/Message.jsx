import { Box,Stack} from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import  { Docmsg,MediaMsg,TimeLine,TxtMsg,ReplyMsg, LinkMessage } from './MsgTypes'

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
                    return <MediaMsg el={el}/>
  
                    case "doc":
                     return <Docmsg el={el}/>
                    case "Link":
                    return <LinkMessage el={el}/>
                    case "reply":
                     return <ReplyMsg el={el}/>
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