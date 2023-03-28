import { useTheme } from "@mui/material";
import { Divider, Stack, Typography, Box } from "@mui/material";
import React from "react";

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

export { TimeLine, TxtMsg };
