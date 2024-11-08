import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { FaHome } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";



const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  return (
    <React.Fragment>
      
      <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0 }} style={{backgroundColor: "white"}}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
          <Link to="/"><FaHome className='text-slate-800 text-4xl' /></Link>
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <Link to="/listings/new"><AddIcon /></Link>
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
         
          <IconButton color="inherit">
            <Link to="/dashboard"><MdDashboard className='text-slate-800 text-4xl' /></Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
