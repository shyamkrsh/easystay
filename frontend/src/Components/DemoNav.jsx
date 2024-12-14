import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { IoArrowBack } from "react-icons/io5";

export default function DenseAppBar({heading}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ position: "fixed", marginTop: "0", zIndex: "10", backgroundColor: '#201f4d'}} className='py-2'>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <IoArrowBack onClick={() => window.history.back()} />
          </IconButton>
          <Typography variant="h5" fontWeight={"600"} color="inherit" component="div">
          {heading}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
