import * as React from 'react'
import { useState } from 'react'
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin'
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { createTheme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
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
          <AppBar position="static" alignitems="center" color="primary">
            <Toolbar>
              <Grid container justify="center" wrap="wrap">
                <Grid item>
                  <Typography variant="h6">
                    Popcorn
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Grid container spacing={0} justify="center" direction="row">
            <Grid item>
              <Grid containerdirection="column"justify="center"spacing={2}className={classes.loginForm}>
                <Paper variant="elevation" elevation={2} className={classes.loginBackground}>
                  <Grid item>
                    <Typography component="h1" variant="h5">
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
                          <Button variant="contained"color="primary"type="submit"className={classes.buttonBlock}>
                            Login
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      Forgot Password?
                    </Link>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Notification />
        </ThemeProvider>
    )
}
