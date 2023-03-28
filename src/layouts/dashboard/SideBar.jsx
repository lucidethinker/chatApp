import React from 'react'
import {Box, Stack, Divider, Avatar,IconButton} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Nav_Buttons } from '../../data';
import Logo from "../../assets/Images/logo.ico";
import useSettings from '../../hooks/useSettings';
import AntSwitch from '../../components/AntSwitch';

const SideBar = () => {

    const theme = useTheme()
    const { onToggleMode } = useSettings();
    const [selected, setSelected] = React.useState(0);
  return (
    <div>
    <Box
        p={3}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack
          py={3}
          alignItems={"center"}
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt="logo" style={{ height: 64, width: 64 }} />
            </Box>
            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems={"center"}
              spacing={3}
            >
              {Nav_Buttons.map((item) =>
                item.index === selected ? (
                  <Box
                    key={item.index}
                    sx={{
                      backgroundColor: theme.palette.info.light,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{ width: "max-content", color: "#000" }}
                      onClick={() => setSelected(item.index)}
                    >
                      {item.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    key={item.index}
                    onClick={() => setSelected(item.index)}
                  >
                    {item.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: "48px" }} />
              <IconButton>
                <Gear />
              </IconButton>
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <AntSwitch
              onChange={() => {
                onToggleMode();
              }}
              defaultChecked
            />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>


    </div>
  )
}

export default SideBar

