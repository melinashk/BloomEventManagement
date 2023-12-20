import React, { useState } from 'react';
import EventDescription from './EventDescripton';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';

//importing icons
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const EventCard = () => {
  //for description of event
  const [showDescription, setShowDescription] = useState(false);
  const theme = useTheme();

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card sx={{ display: 'flex', boxShadow: '0px 0px 8px 2px rgba(0, 0, 0, 0.2)', height: 'auto' }}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            {/* event title */}
            <Typography
              component="div"
              variant="h3"
              textAlign="left"
              sx={{ fontWeight: 'bold', fontSize: '20px', color: '#7B1FA2' }}
            >
              Workshop on this that and what what
            </Typography>

            {/* for date */}
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Avatar sx={{ backgroundColor: 'white', color: 'black', marginRight: 1 }}>
                      <DateRangeOutlinedIcon />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Typography sx={{marginLeft: "-9px"}} variant="body1">2080-05-27</Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* for time */}
              <Grid item xs={12} md={6}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Avatar sx={{ backgroundColor: 'white', color: 'black', marginRight: 1 }}>
                      <AccessTimeOutlinedIcon />
                    </Avatar>
                  </Grid>
                  <Grid item >
                    <Typography sx={{marginLeft: "-9px"}} variant="body1">08:00 AM</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* for location */}
            <Grid container alignItems="center">
              <Grid item>
                <Avatar sx={{ backgroundColor: 'white', color: 'black', marginRight: 1 }}>
                  <LocationOnOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid item >
                <Typography sx={{marginLeft: "-9px"}} variant="body1">Jawalakhel</Typography>
              </Grid>
            </Grid>

            {/* for published by */}
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="body1" sx={{ fontSize: 12 }}>
                  Published By: Hari Prasad
                </Typography>
              </Grid>
            </Grid>
            {/* For description */}
            {showDescription ? (
              <EventDescription />
            ) : null}

            <div style={{ marginRight: '-295px', marginTop: '-25px' }}>
              {showDescription ? (
                <button onClick={toggleDescription}>Read Less</button>
              ) : (
                <button onClick={toggleDescription}>Read More</button>
              )}
            </div>
          </CardContent>
        </Grid>

        {/* for image banner */}
        <Grid item xs={12} md={4}>
          <Box sx={{ height: '100%', paddingTop: '19px', paddingRight: '19px' }}>
            <CardMedia
              component="img"
              sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              image="/images/hci.png"
              alt="Live from space album cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default EventCard