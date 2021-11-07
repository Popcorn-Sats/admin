import * as React from "react"
import { List, Datagrid, TextField, RichTextField, DateField } from 'react-admin'

export const TransactionList = props => (
  <List {...props}>
      <Datagrid rowClick="show">
          <DateField label="Date" source="block.date" />
          <TextField label="Type" source="transactiontype.type" />
          <TextField label="Category" source="category.name" />
          <RichTextField source="description" />
          <TextField source="balance_change" />
          {/* <TextField source="txid" />
          <TextField source="address" />
          <TextField source="network_fee" />
          <TextField source="size" />
          <TextField label="Block height" source="block.height" />
          <ArrayField source="transactionledgers"><SingleFieldList><ChipField source="id" /></SingleFieldList></ArrayField> */}
      </Datagrid>
  </List>
)