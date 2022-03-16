import * as React from "react"
import { List, Datagrid, TextField } from 'react-admin'
import CategoryChart from "./CategoryPie"

const CategoryList = props => (
  <>
    <CategoryChart />
    <List {...props}>
        <Datagrid rowClick="show">
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="balance" />
        </Datagrid>
    </List>
  </>
)

export default CategoryList