import { Grid } from "@mui/material";
import React from "react";
import OrganizerNavBar from "../components/OrganizerNavBar";
import MainPage from "./Dashboard";

const OrganizerDashboard = () => {
  return (
    <Grid container>
      <Grid item>
        <OrganizerNavBar />
      </Grid>

      <Grid item>
        <MainPage />
      </Grid>
    </Grid>
  )
}

export default OrganizerDashboard