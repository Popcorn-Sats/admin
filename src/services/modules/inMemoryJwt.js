const inMemoryJWTManager = () => {
  let inMemoryJWT = null

  // This listener allows to disconnect another session of react-admin started in another tab
  window.addEventListener('storage', (event) => {
    if (event.key === 'ra-logout') {
        inMemoryJWT = null;
    }
})

  const getToken = () => inMemoryJWT

  const setToken = (token) => {
      inMemoryJWT = token
      return true
  }

  const eraseToken = () => {
      inMemoryJWT = null
      window.localStorage.setItem('ra-logout', Date.now())
      return true
  }

  return {
      eraseToken,
      getToken,
      setToken,
  }
}

export default inMemoryJWTManager()