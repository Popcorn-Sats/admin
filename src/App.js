import * as React from "react"
import { Admin, Resource } from 'react-admin'
import dataProvider from './dataProvider'
import { AccountList } from "./accounts"
import { AccountShow } from "./accountShow"
import { AccountEdit } from "./accountEdit"
import { AccountCreate } from "./accountCreate"
import categories from './categories';
import { Dashboard } from "./dashboard"
import { TransactionList } from "./transactions"
import { TransactionShow } from './transactionShow'
import { TransactionEdit } from "./transactionEdit"

const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="accounts" list={AccountList} show={AccountShow} edit={AccountEdit} create={AccountCreate} />
    <Resource name="categories" {...categories} />
    <Resource name="transactions" list={TransactionList} show={TransactionShow} edit={TransactionEdit} />
  </Admin>
)

export default App