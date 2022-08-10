import React, { useState } from "react";
import { TopbarDiv } from "./styles";
import { MenuItem, Menu, IconButton, TextField } from "@mui/material/";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const Topbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TopbarDiv>
      <div style={{ display: "inline", float: "left" }}>
        <DensityMediumIcon style={{ margin: "28px 10px 0px 10px" }} />
        <TextField
          style={{ marginTop: "20px" }}
          size="small"
          label="Search"
          variant="outlined"
        />
      </div>
      <div style={{ float: "right" }}>
        <IconButton aria-label="delete">
          <FullscreenIcon />
        </IconButton>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </TopbarDiv>
  );
};

export default Topbar;
