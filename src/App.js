import * as React from "react"
import { Admin, Resource } from 'react-admin'
import dataProvider from './dataProvider'
import { AccountList } from "./accounts"
import { AccountShow } from "./accountShow"
import { CategoryList } from "./categories"
import { TransactionList } from "./transactions"

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="accounts" list={AccountList} show={AccountShow} />
    <Resource name="categories" list={CategoryList} />
    <Resource name="transactions" list={TransactionList} />
  </Admin>
)

export default App