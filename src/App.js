import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import Navbar from "./components/Navbar";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchDetail from "./components/SearchDetail";
import Feed from "./components/Feed";

const App = () => {
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:id" element={<SearchDetail />} />
      </Routes>
    </Box>
  </BrowserRouter>;
};

export default App;
