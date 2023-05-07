import React from 'react'
import { Box,Stack,InputAdornment, IconButton } from '@mui/material'
import { useTheme } from '@mui/material'
import StyledInput from '../StyledInput'
import { LinkSimple, PaperPlane, Smiley } from 'phosphor-react';


function Footer() {
    const theme = useTheme();
  return (
    <div>
       

      <Box
        p={2}
        sx={{
          width: "100%",
          backgroundColor: theme.palette.mode === "light"
          ? "#fff"
          : theme.palette.background.default,
          boxShadow: "0px 0px 2px rgba(0,0,0.25)",
        }}
      >
        <Stack direction="row" align={"center"} spacing={3}>
          <StyledInput
            fullWidth
            placeholder="Write a message .."
            variant="filled"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <LinkSimple />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <Smiley />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              height: 50,
              width: 50,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{ height: "100%", width: "100%" }}
              alignItems="center"
              justifyContent="center"
            >
              <IconButton>
                <PaperPlane color="white" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>

    </div>
  )
}

export default Footer