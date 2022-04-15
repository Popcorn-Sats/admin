import * as React from 'react'
import { useState } from 'react'
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin'
import {
  Avatar,
  Box,
  Button,
  TextField,
  Grid,
  Paper,
  Checkbox,
  Typography,
  Link,
  Container,
  FormControlLabel,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { ThemeProvider } from '@material-ui/styles'
import { createTheme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  background: {
    background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
    height: '100vh',
    paddingTop: '10vh',
  },
  buttonBlock: {
    marginTop: '30px',
    marginBottom: '20px',
  },
  loginBackground: {
      justifyContent: 'center',
      minHeight: '30vh',
      padding: '30px',
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
        <Box className={classes.background}>
          <Container component="main" maxWidth="xs">
            <Paper variant="elevation" elevation={2} className={classes.loginBackground}>
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    variant='outlined'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    variant='outlined'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.buttonBlock}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Paper>
          </Container>
        </Box>
        <Notification />
      </ThemeProvider>
    )
}
