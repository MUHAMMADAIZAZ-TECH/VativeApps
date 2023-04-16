import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Apps } from "@mui/icons-material";
import { Box, Toolbar, AppBar } from "@mui/material";
export default function Header() {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Apps
          sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: 25 }}
        />
        <img src="" alt="" />
        <h2> Vative Apps Task </h2>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
      </Toolbar>
    </AppBar>
  );
}
