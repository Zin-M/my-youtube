import { Box, Stack, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box p={1.5} sx={{ overflowY: "auto", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          Search Results for :
          <span style={{ color: "#F31503" }}> {searchTerm} videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
