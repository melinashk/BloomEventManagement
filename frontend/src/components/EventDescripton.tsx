import { Grid } from '@mui/material';
import React from 'react';

const EventDescription = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <p style={{ textAlign: "left", margin: "25px 0" }}>Description: This is an event description.</p>
      </Grid>
    </Grid>
  );
};

export default EventDescription;
