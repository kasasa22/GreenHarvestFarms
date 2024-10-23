import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GreenHarvest Farms
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/farmers">
            Farmers
          </Button>
          <Button color="inherit" component={Link} to="/orders">
            Orders
          </Button>
          <Button color="inherit" component={Link} to="/market-trends">
            Market Trends
          </Button>
          <Button color="inherit" component={Link} to="/appointments">
            Appointments
          </Button>
          <Button color="inherit" component={Link} to="/support">
            Support
          </Button>
          <Button color="inherit" component={Link} to="/help">
            Help & FAQ
          </Button>
          <Button color="inherit" component={Link} to="/settings">
            Settings
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
