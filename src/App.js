import * as React from "react"
import { Admin, Resource, ListGuesser } from 'react-admin'
// import jsonServerProvider from 'ra-data-json-server'
import dataProvider from './dataProvider'

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="accounts" list={ListGuesser} />
    <Resource name="accounttypes" list={ListGuesser} />
    <Resource name="blocks" list={ListGuesser} />
    <Resource name="categories" list={ListGuesser} />
    <Resource name="transactions" list={ListGuesser} />
    <Resource name="transactiontypes" list={ListGuesser} />
  </Admin>
)

export default App