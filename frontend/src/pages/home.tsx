import React from 'react'
import {Grid} from "@mui/material"

import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import EventCard from '../components/Card'

const HomePage = () => {
  // styling the main text image
  const textStyle = {
    maxWidth: "300px",
    marginRight: "auto", 
    marginLeft: "auto"
  };
  
  return (
    <Grid container justifyContent="center" direction="column" spacing={2} textAlign="center">
      {/* NavBar */}
      <Grid item >
        <NavBar />
      </Grid>

    {/* text image */}
      <Grid item mt={8}>
      <img src="/images/Bloomtext.png" alt="bloomtext" style={textStyle} />
      </Grid>

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

export default HomePage