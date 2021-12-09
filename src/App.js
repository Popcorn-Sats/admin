import * as React from "react"
import { Admin, Resource } from 'react-admin'
import dataProvider from './dataProvider'
import { AccountList } from "./accounts"
import { AccountShow } from "./accountShow"
import { CategoryList } from "./categories"
import { CategoryShow } from "./categoryShow"
import { TransactionList } from "./transactions"
import { TransactionShow } from './transactionShow'

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="accounts" list={AccountList} show={AccountShow} />
    <Resource name="categories" list={CategoryList} show={CategoryShow} />
    <Resource name="transactions" list={TransactionList} show={TransactionShow} />
  </Admin>
)

export default App