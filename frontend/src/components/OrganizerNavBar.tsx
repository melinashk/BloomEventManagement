import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Grid, Box, Avatar } from "@mui/material";
import Image from 'mui-image';
import { Link } from "react-router-dom"; 
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import PersonIcon from '@mui/icons-material/Person';

const OrganizerNavBar = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // logostyling
  const logoStyle = {
    maxWidth: isSmScreen ? "100px" : "120px",
    marginRight: "auto", 
  };

  // home tab styling
  const tabStyle = {
    color: '#7B1FA2', 
    textDecoration: 'none', 
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar sx={{ backgroundColor: "#F0f0f0"}}> 
          <Grid container justifyContent="space-between" alignItems="center">
            {/* logo */}
            <Grid item xs={6} sx={{pl: "100px"}}>
              <Image src="/images/bloomlogo.png" alt="bloom" style={logoStyle} />
            </Grid>
            {/* home tab */}
            <Grid item xs={6} container justifyContent={isSmScreen ? "center" : "flex-end"} alignItems="center" sx={{ pr: isSmScreen ? "16px" : "100px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link to="/" style={tabStyle}>
                <Tabs>
                    <Tab label="HOME" sx={{ color: "#7B1FA2" }} />
                </Tabs> 
                </Link>
                {/* my events */}
                <Link to="/myevents" style={tabStyle}>
                <Tabs>
                    <Tab label="MY EVENTS" sx={{ color: "#7B1FA2" }} />
                </Tabs> 
                </Link>
                <Avatar sx={{backgroundColor: "#7B1FA2"}}>
                  <PersonIcon />
                </Avatar>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default OrganizerNavBar;
