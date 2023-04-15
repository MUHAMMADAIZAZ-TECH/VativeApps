import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';

export default function Sidebar({drawer,drawerWidth}) {
  return (
   <React.Fragment>
    <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    <Toolbar/>
    {drawer}
  </Drawer>
  </React.Fragment>
  )
}
