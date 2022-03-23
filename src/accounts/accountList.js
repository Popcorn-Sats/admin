import * as React from "react"
import { List, Datagrid, TextField, DateField, BooleanField, RichTextField, ChipField, NumberField, TextInput } from 'react-admin'

const accountFilters = [
  // <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Account Name" source="name" />,
];

const AccountList = props => (
  <List {...props} filters={accountFilters}>
      <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <RichTextField source="notes" />
          <DateField source="birthday" />
          <BooleanField source="active" />
          <BooleanField source="owned" />
          <ChipField label="Type" source="accounttype.name" />
          <NumberField label="Balance (sats)" source="balance" />
      </Datagrid>
  </List>
)

export default AccountList