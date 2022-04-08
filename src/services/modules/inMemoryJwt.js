const inMemoryJWTManager = () => {
  let logoutEventName = 'ra-logout'
  let refreshEndpoint = '/refreshtoken'
  let inMemoryJWT = null
  let inMemoryRefreshToken = null
  let refreshTimeOutId

  // This listener allows to disconnect another session of react-admin started in another tab
  window.addEventListener('storage', (event) => {
    if (event.key === logoutEventName) {
      inMemoryJWT = null
    }
  })

  const setRefreshTokenEndpoint = endpoint => refreshEndpoint = endpoint

  // This countdown feature is used to renew the JWT in a way that is transparent to the user.
  // before it's no longer valid
  const refreshToken = (delay) => {
    console.log('token will be refreshed in ' + delay + ' seconds')
    refreshTimeOutId = window.setTimeout(
      getRefreshedToken,
      delay * 1000 - 5000
    ) // Validity period of the token in milliseconds, minus 5 seconds
  }

  const abortRefreshToken = () => {
    if (refreshTimeOutId) {
      window.clearTimeout(refreshTimeOutId);
    }
  }

  // The method makes a call to the refresh-token endpoint
  // If there is a valid cookie, the endpoint will return a fresh jwt.
  const getRefreshedToken = async () => {
    console.log('refreshing token')
    const request = new Request(refreshEndpoint, {
      method: 'POST',
      body: JSON.stringify({ 'refreshToken': inMemoryRefreshToken }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
      // credentials: 'include',
    })
    return await fetch(request)
      .then((response) => {
        if (response.status !== 200) {
          eraseToken();
          global.console.log(
            'Failed to renew the jwt from the refresh token.'
          )
          return { token: null };
        }
        return response.json();
      })
      .then(({ accessToken, tokenExpiry, refreshToken }) => {
        if (accessToken) {
          setToken(accessToken, tokenExpiry, refreshToken);
          return true;
        }

          return false
      })
  }

  const getToken = () => inMemoryJWT

  const setToken = (token, delay, passedRefreshToken) => {
      inMemoryJWT = token
      inMemoryRefreshToken = passedRefreshToken
      refreshToken(delay)
      return true
  }

  const eraseToken = () => {
      inMemoryJWT = null
      abortRefreshToken()
      window.localStorage.setItem(logoutEventName, Date.now())
      return true
  }

  const setLogoutEventName = name => logoutEventName = name

  return {
      eraseToken,
      getToken,
      setLogoutEventName,
      setRefreshTokenEndpoint,
      getRefreshedToken,
      setToken,
  }
}

export default inMemoryJWTManager()