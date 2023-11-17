import React from "react";
import {} from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const MovieCard = () => {
  return (
    <Card sx={{ maxWidth: 150, position: "relative" }}>
      <IconButton
        sx={{ position: "absolute", right: 0, top: 0 }}
        aria-label="more"
        id="long-button"
        // aria-controls={open ? "long-menu" : undefined}
        // aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        // anchorEl={anchorEl}
        open={true}
        onClose={() => {}}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={() => {}}>optional</MenuItem>
      </Menu>

      <CardMedia
        component="img"
        height="225"
        image="https://www.themoviedb.org/t/p/w220_and_h330_face/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom component="div">
          The Creator
        </Typography>

        <Typography variant="subtitle1" gutterBottom component="div">
          Sep 27, 2023
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
