import React, { useState } from "react"
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from 'yup'
import {FormHelperText} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import NavBar from "../../components/NavBar";
import { signup } from "../../Apis/signup.api";


const Signup = () => {
  // button styling
  const btnStyle = {
    color: '#ffffff',
    backgroundColor: '#7B1FA2'
  }

  // background paper styling
  const paperStyle = {
    padding: 20, 
    width: 280, 
    margin: "20px auto"
  }

  // icon styling
  const avatarStyle = {
    background:'green',
    margin: "0 auto",
    marginBottom: '12px'
  }

  // type definition
  type FormValues = {
    role: string,
    name: string,
    email: string,
    gender: string,
    phoneNumber: string,
    password: string,
    confirmPassword: string,
    termsAndConditions: boolean
  }

  // initial value setting
  const initialValues = {
    role: '',
    name: '',
    email: '',
    gender: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    termsAndConditions: false
  }

  const navigate = useNavigate()

  const [error, setError] = useState('');

  // onSubmit function
  const onSubmit = async(values: FormValues, props: FormikHelpers<FormValues>) => {
    
      const response = await signup(values);
      if(response?.status === 201){
        navigate('/login')
      }else{
    setError(response?.message || 'An error occurred');
      }
  }

  // Yup validation
  const validationSchema = Yup.object().shape({
    role: Yup.string().oneOf(["Attendee", "Organizer"], 'Required').required('Required'),
    name: Yup.string().min(3, 'Too short').required('Required'),
    email: Yup.string().email('Enter valid email').required('Required'),
    gender: Yup.string().oneOf(["Male", "Female"], 'Required').required('Required'),
    phoneNumber: Yup.number().typeError('Enter valid phone number').required('Required'),
    password: Yup.string().min(8,'Password minimum length should be 8').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password not matched').required('Required'),
    termsAndConditions: Yup.boolean().oneOf([true], "Accept the terms and conditions").required("You must accept the terms and conditions")

  })

  return (
    <Grid container justifyContent="center">
      {/* Navbar */}
      <Grid>
        <NavBar />
      </Grid>
      <Grid item xs={12} sm={6} mt={10}>
      <Paper elevation={10} style={paperStyle}>
       <Grid container textAlign="center" justifyContent="center">
          <Grid item>
            {/* Icon */}
            <Avatar style={avatarStyle}>
              <AddCircleIcon />
            </Avatar>
            <h2 style={{marginBottom: -5}}>Signup</h2>
            <Typography variant='caption'>Please fill this form to create an account</Typography>
          </Grid>
        </Grid>

        <Formik 
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {(props) => (
          <Form>
            <Grid item xs={12} sx={{ textAlign: 'left', justifyContent: 'flex-start', marginTop: 2, marginBottom: -2}}>
              <FormControl 
                component="fieldset" 
              >
                {/* role */}
                <FormLabel component="legend">I am an:</FormLabel>
                <Field as={RadioGroup}
                  aria-label="role"
                  name="role"
                  style={{display:'initial'}}
                  required
                >
                <FormControlLabel value="Attendee" control={<Radio />} label="Attendee" />
                <FormControlLabel value="Organizer" control={<Radio />} label="Organizer" />
              </Field>
              </FormControl>
              <FormHelperText style={{marginTop: -2, marginBottom: 12}}><ErrorMessage name="role"/></FormHelperText>
            </Grid>

            {/* Name */}
            <Grid item xs={12}>
              <Field as={TextField} 
                variant="standard"
                label="Name"
                placeholder="Enter Name"
                name="name"
                fullWidth
                helperText={<ErrorMessage name="name"/>}
                required
              />
            </Grid>

            {/* email */}
            <Grid item xs={12}>
              <Field as={TextField} 
                variant="standard"
                label="Email"
                placeholder="Enter Email"
                name="email"
                fullWidth
                helperText={<ErrorMessage name="email"/>}
                required
              />
            </Grid>

            {/* gender */}
            <Grid item xs={12} sx={{ textAlign: 'left', justifyContent: 'flex-start', marginTop: 2, marginBottom: -2}}>
              <FormControl 
                component="fieldset" 
              >
                <FormLabel component="legend">Gender</FormLabel>
                <Field as={RadioGroup}
                  aria-label="gender"
                  name="gender"
                  style={{display:'initial'}}
                  required
                >
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                </Field>
              </FormControl>
              <FormHelperText style={{marginTop: -4, marginBottom: 12}}><ErrorMessage name="gender"/></FormHelperText>
            </Grid>

            {/* phone number */}
            <Grid item xs={12}>
              <Field as={TextField}
                variant="standard" 
                label="Phone Number"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                fullWidth
                helperText={<ErrorMessage name="phoneNumber"/>}
                required
              />
            </Grid>

            {/* password */}
            <Grid item xs={12}>
              <Field as={TextField}
                variant="standard" 
                label="Password"
                placeholder="Enter Password"
                name="password"
                type="password"
                fullWidth
                helperText={<ErrorMessage name="password"/>}
                required
              />
            </Grid>

            {/* confirm password */}
            <Grid item xs={12}>
              <Field as={TextField}
                variant="standard" 
                label="Confirm Password"
                placeholder="Enter Confirm Password"
                name="confirmPassword"
                type="password"
                fullWidth
                helperText={<ErrorMessage name="confirmPassword"/>}
                required
              />
            </Grid>

            {/* terms and conditions */}
            <Grid item xs={12}>
                <Field as={FormControlLabel} 
                  name="termsAndConditions"
                  control={<Checkbox />} 
                  label={<span style={{textAlign:"left" , marginTop:"1rem", fontSize: "14px"}}
                >I accept the terms and conditions</span>} />
                <FormHelperText><ErrorMessage name="termsAndConditions"/></FormHelperText>
            </Grid>

            {/* button */}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Button 
                variant="contained"
                disabled={props.isSubmitting}
                type="submit" 
                style={btnStyle}
              >{props.isSubmitting ? "Loading" : "Sign Up"}</Button>
            </Grid>
            {error && <p style={{ color: 'red', textAlign: 'left', marginTop: '0.5rem' }}>{error}</p>}
          </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
    </Grid>
  )
}

export default Signup