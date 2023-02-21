import { Stack, Box, Typography } from "@mui/material";
import SideBar from "./SideBar";
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: "auto", md: 2 },
        }}
      >
        <SideBar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: "15px", color: "#fff" }}
        >
          Copyright 2023 ZMM media
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
