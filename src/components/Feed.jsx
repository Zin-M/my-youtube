import { Stack, Box, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useEffect, useState } from "react";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: "15px", color: "#fff" }}
        >
          Copyright 2023 ZMM media
        </Typography>
      </Box>
      <Box p={1.5} sx={{ overflowY: "auto", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> video</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
