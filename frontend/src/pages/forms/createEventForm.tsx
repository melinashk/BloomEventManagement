import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import OrganizerNavBar from '../../components/OrganizerNavBar'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';

const createEventForm = () => {
  const paperStyle = {
    padding: 25, 
    width: 350, 
    margin: "15px auto"
  };

  const createStyle = {
    backgroundColor: '#7B1FA2',
    color: '#ffffff',
    padding: '6px',
    margin: '8px'
  };

  const cancelStyle = {
    backgroundColor: '#F0F0F0',
    color: '#000000',
    padding: '6px',
    margin: '8px'
  };

  type FormValues = {
    eventName: string,
    date: Date,
    time: Date,
    location: string,
    publishedBy: string,
    description: string,
    banner: File
  }

  const initialValues = {
    eventName: '',
    date: new Date(),
    time: new Date(),
    location: '',
    publishedBy: '',
    description: '',
    banner: new File([], '')
  }

  const onSubmit = (values: FormValues, props: FormikHelpers<FormValues>) => {
    console.log(values)
    setTimeout(() => {
      props.resetForm() //resetting the form
      props.setSubmitting(false)
    }, 2000)
  }

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }} margin="20px">
      <Grid item>
        <OrganizerNavBar />
      </Grid>

      <Grid item>
        <Paper elevation={10} style={paperStyle}>
          <h2 style={{margin:"auto", textAlign:'center'}}>Event Form</h2>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit} >
              {(props) => (
                <Form>
                  <Grid item>
                  <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
                  <Typography style={{ marginRight: '10px',minWidth: '110px', marginTop: '20px' }}>
                    Event Name:
                  </Typography>
                  <div style={{ flex: 1, borderBottom: '1px #000' }}>
                    <Field
                      type={TextField}
                      variant="standard"
                      name="eventName"
                      fullWidth
                      required
                      as={TextField}
                    />
                  </div>
                  <ErrorMessage name="eventName" />
                </div>
                  </Grid>

                  <Grid item>
                  <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
                  <Typography style={{ marginRight: '10px', minWidth: '110px', marginTop: '10px'}}>
                    Date:
                  </Typography>
                    <Field type='date'
                    variant="standard"
                    label="Date"
                    name="date"
                    fullWidth
                    required
                    helperText={<ErrorMessage name="date" />}
                  />  
                  </div>
                  </Grid>

                  <Grid item>
                  <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
                  <Typography style={{ marginRight: '10px', minWidth: '110px', marginTop: '10px' }}>
                    Time:
                  </Typography>
                    <Field type='time'
                    variant="standard"
                    label="Time"
                    name="time"
                    fullWidth
                    required
                    helperText={<ErrorMessage name="time" />}
                  />  
                  </div>
                  </Grid>

                  <Grid item>
                  <div style={{ display: "flex", justifyContent:'space-between', alignItems: "center", marginTop: 10 }}>
                  <Typography style={{ marginRight: '10px', minWidth: '110px', marginTop: '20px' }}>
                    Location:
                  </Typography>
                    <Field as={TextField}
                    variant="standard"
                    name="location"
                    fullWidth
                    required
                    helperText={<ErrorMessage name="location" />}
                  />  
                  </div>
                  </Grid>

                  <Grid item>
                  <div style={{ display: "flex", justifyContent:'space-between', alignItems: "center", marginTop: 20 }}>
                  <Typography style={{ marginRight: '10px', minWidth: '110px', marginTop: '20px' }}>
                  Published By:
                  </Typography>
                    <Field as={TextField}
                    variant="standard"
                    name="publishedBy"
                    fullWidth
                    required
                    helperText={<ErrorMessage name="publishedBy" />}
                  />  
                  </div>
                  </Grid>

                  <Grid item>
                  <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
                  <Typography style={{ marginRight: '10px', minWidth: '110px', marginTop: '10px' }}>
                  Banner Image:
                  </Typography>
                    <Field type={'file'}
                    variant="standard"
                    name="bannerImage"
                    fullWidth
                    required
                    helperText={<ErrorMessage name="bannerImage" />}
                  />
                  </div>  

                  <Grid container justifyContent="center" alignItems="center" marginTop="20px">
                    <Button
                      variant='contained'
                      style={createStyle}
                      type='submit'
                    >Create</Button>
                    <Button
                      variant= 'contained'
                      style={cancelStyle}
                      type='submit'
                    >Cancel</Button>
                  </Grid>

                  </Grid>
                </Form>
              )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default createEventForm
