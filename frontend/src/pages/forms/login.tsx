import React, { useState } from "react"
import { Grid, Paper, Avatar, TextField, Button, FormControlLabel, Checkbox, Typography, Link } from "@mui/material"
import { Form, Formik, Field, ErrorMessage, FormikHelpers } from "formik"
import * as Yup from 'yup'
import LoginIcon from '@mui/icons-material/Login'
import NavBar from "../../components/NavBar"
import { login } from "../../Apis/login.api"
import { useNavigate } from "react-router-dom"

const Login = () => {
  // background white paper design
  const paperStyle = {
    padding: 20, 
    width: 280, 
    margin: "20px auto"
  };

  // icon styling
  const avatarStyle = {
    background:'green',
    margin: "0 auto",
    marginBottom: '12px'
  }

  // button styling
  const btnStyle = {
    margin: "8px 0",
    color: '#ffffff',
    backgroundColor: '#7B1FA2'
  }

  // type definition
  type FormValues = {
    email: string,
    password: string,
    remember: boolean,
  }

  // initial values setting
  const initialValues = {
    email: '',
    password: '',
    remember: false,
  }

  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState(false)

  //onSubmit function
  const onSubmit = async (values: FormValues, props: FormikHelpers<FormValues>) => {
    const response = await login(values);
    console.log({response})
    if(response?.status === 202){
      localStorage.setItem('access_token', response.accessToken);
      localStorage.setItem('refresh_token', response.refreshToken);
      navigate('/dashboard')
    }
    else{
      setError(response?.message || 'An error occurred');
    }
  }

  //Yup validation
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter valid email').required('Required'),
    password: Yup.string().required('Required')
  })


  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      <Grid>
        <NavBar />
      </Grid>
      <Grid item>
      <Paper elevation={10} style={paperStyle}>
        <Grid container textAlign="center" justifyContent="center">
          <Grid item>
            {/* login icon */}
            <Avatar style={avatarStyle}>
              <LoginIcon />
            </Avatar>
            <h2>LogIn</h2>
          </Grid>
        </Grid>

       <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
          {(props) => (
            
            <Form>
              <Grid item> 
              {/* Email */}
                <Field as={TextField}
                  variant="standard"
                  label="Email"
                  placeholder="Enter email"
                  name="email"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="email" />}
                />  
            </Grid>

            <Grid item>
              {/* Password */}
              <Field as={TextField}
                variant="standard"
                placeholder="Enter Password"
                label="password"
                name="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
            </Grid>

            <Grid item>
              {/* remember me checkbox */}
                <Field as={FormControlLabel}
                  name="remember" 
                  control={<Checkbox />} label="Remember me" />
            </Grid>

              <Grid item>
                {/* Login button */}
                <Button 
                  variant="contained"
                  type="submit" 
                  disabled={props.isSubmitting}
                  color="primary" 
                  style={btnStyle}
                  fullWidth
                >{props.isSubmitting ? "Loading" : "Log In"}</Button>
              </Grid>
            </Form>
          )}
       </Formik>


        <Grid item>
        <Typography textAlign="left">
          <Link href="#" underline="none" color="#7B1FA2">
            {'Forgot Password?'}
          </Link>
        </Typography>
        </Grid>

        <Grid item>
        <Typography textAlign="left">Do not have an account?
          <Link href="/signup" underline="none" color="#7B1FA2">
            {'Sign Up'}
          </Link>
        </Typography>
        </Grid>
      </Paper>
      </Grid>
    </Grid>
  )
}

export default Login


