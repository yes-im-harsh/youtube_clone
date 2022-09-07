import { Link } from "react-router-dom";
import { Typography, CardContent, CardMedia, Card } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(videoId, snippet);
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 1,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 340, height: 180 }}
        />
        <CardContent sx={{ background: "#1e1e1e", height: "160px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" color="#fff" fontWeight="bold">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" color="gray" fontWeight="bold">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
