import { Container, Header, Sidebar } from "../Layout/";
import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
const Dashboard = () => {
  const drawerWidth = 240;
  const drawer = (
    <Box sx={{ overflow: "auto" }}>
      <List>
        {["List", "List/View"].map((text, index) => (
          <Link
            to={text}
            key={index}
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <AccountCircleIcon /> : <AccountCircleIcon />} */}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar drawer={drawer} drawerWidth={drawerWidth} />
      </Box>
      <Container drawerWidth={drawerWidth} />
    </Box>
  );
};

export default Dashboard;
