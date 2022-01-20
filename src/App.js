import * as React from "react"
import { Admin, Resource } from 'react-admin'
import dataProvider from './dataProvider'
import accounts from './accounts'
import categories from './categories'
import transactions from './transactions'
import { Dashboard } from "./dashboard"

const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="accounts" {...accounts} />
    <Resource name="categories" {...categories} />
    <Resource name="transactions" {...transactions} />
  </Admin>
)

export default App