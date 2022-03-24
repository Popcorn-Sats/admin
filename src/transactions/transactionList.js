import * as React from "react"
import { List, Datagrid, TextField, RichTextField, NumberField, EditButton, TextInput } from 'react-admin'

const transactionFilters = [
  // <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Description" source="description" />,
];

const TransactionList = props => (
  <List {...props} filters={transactionFilters}>
      <Datagrid rowClick="show">
          <NumberField label="Block height" source="block.height" sortable={false} />
          {/* <DateField label="Date" source="block.date" /> */}
          <TextField label="Type" source="transactiontype" sortable={false} />
          <TextField label="Category" source="category.name" sortable={false} />
          <RichTextField source="description" />
          <TextField source="balance_change" sortable={false} />
          <NumberField source="runningBalance" sortable={false} />
          <EditButton basePath="/transactions" />
          {/* <TextField source="txid" />
          <TextField source="address" />
          <TextField source="network_fee" />
          <TextField source="size" />
          <ArrayField source="transactionledgers"><SingleFieldList><ChipField source="id" /></SingleFieldList></ArrayField> */}
      </Datagrid>
  </List>
)

export default TransactionList