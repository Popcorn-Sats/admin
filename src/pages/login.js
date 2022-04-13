import * as React from 'react'
import { useState } from 'react'
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin'
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Link
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { createTheme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  background: {
    background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
    height: '100vh',
  },
  logo: {
    margin: '0 auto',
    display: 'block',
    marginTop: '20px',
    marginBottom: '40px',
  },
  loginForm: {
      justifyContent: 'center',
      minHeight: '90vh',
  },
  buttonBlock: {
      width: '100%',
  },
  loginBackground: {
      justifyContent: 'center',
      minHeight: '30vh',
      padding: '50px',
  },
}))

export const LoginPage = ({ theme }) => {
    const classes = useStyles()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = useLogin()
    const notify = useNotify()
    const submit = e => {
        e.preventDefault()
        login({ username, password }).catch(() =>
            notify('Invalid username or password')
        )
    }

    return (
      <ThemeProvider theme={createTheme(defaultTheme)}>
        <Grid container spacing={0} justify="center" direction="row" className={classes.background}>
          <Grid item>
            <Grid container direction="column" justify="center" spacing={2} className={classes.loginForm}>
              <Paper variant="elevation" elevation={2} className={classes.loginBackground}>
                <Grid item>
                  <Typography component="h1" variant="h5" align='center' className={classes.logo}>
                    / popcorn logo \
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="h2" variant="h6" align='center'>
                    Sign in
                  </Typography>
                </Grid>
                <Grid item>
                  <form onSubmit={submit}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="text"
                          placeholder="Username"
                          fullWidthname="username"
                          variant="outlined"
                          value={username}
                          onChange={e => setUsername(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidthname="password"
                          variant="outlined"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Link href="#" variant='caption'>
                          Forgot Password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="primary" type="submit" className={classes.buttonBlock}>
                          Login
                        </Button>
                      </Grid>
                      <Grid item>
                        <Typography variant="caption">
                          Don't have an account?&nbsp;
                        </Typography>
                        <Link href="#" variant='caption'>
                          Sign Up
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Notification />
      </ThemeProvider>
    )
}
