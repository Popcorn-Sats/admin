import * as React from "react"
import { Admin, Resource } from 'react-admin'
import dataProvider from './dataProvider'
import { AccountList } from "./accounts"
import { AccountShow } from "./accountShow"
import { AccountEdit } from "./accountEdit"
import { AccountCreate } from "./accountCreate"
import categories from './categories'
import transactions from './transactions'
import { Dashboard } from "./dashboard"

const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="accounts" list={AccountList} show={AccountShow} edit={AccountEdit} create={AccountCreate} />
    <Resource name="categories" {...categories} />
    <Resource name="transactions" {...transactions} />
  </Admin>
)

export default App