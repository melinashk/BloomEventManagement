import { Button, Grid } from "@mui/material";
import React from "react";
import OrganizerNavBar from "../components/OrganizerNavBar";
import SearchBar from "../components/SearchBar";
import EventCard from "../components/Card";
import { Link } from "react-router-dom";


const MyEvents = () => {
   // styling the main text image
   const textStyle = {
    maxWidth: "300px",
    marginRight: "auto", 
    marginLeft: "auto"
  };
  
  return (
    <Grid container justifyContent="center" direction="column" spacing={2} textAlign="center">

      <Grid item>
        <OrganizerNavBar />
      </Grid>

    {/* text image */}
      <Grid item mt={8}>
      <img src="/images/Bloomtext.png" alt="bloomtext" style={textStyle} />
      </Grid>

      <Link to="/createEvent">
        <Button
          href="#text-buttons"
          variant="contained"
          sx={{
            width: "210px", 
            height:"50px", 
            marginLeft: "auto", 
            marginRight: "auto", 
            borderRadius: "25px",
            backgroundColor:"#6314A3",
            marginTop: "32px",
            '&:hover': {
              backgroundColor: '#893FA9',
            }
          }} 
        >
          Create New Event
        </Button>
      </Link>

    {/* Search bar */}
      <Grid item >
        <SearchBar />
      </Grid>

      {/* event card */}
      <Grid container spacing={6} mt={3} sx={{ pl: "180px", pr: "180px"}}>
        <Grid item xs={12} sm={6} >
          <EventCard />
        </Grid>

        <Grid item xs={12} sm={6} >
          <EventCard />
        </Grid>

        <Grid item xs={12} sm={6} >
          <EventCard />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MyEvents