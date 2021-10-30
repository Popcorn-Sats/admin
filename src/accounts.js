import * as React from "react";
import { List, Datagrid, TextField, DateField, NumberField, BooleanField } from 'react-admin';

export const AccountList = props => (
  <List {...props}>
      <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="notes" />
          <DateField source="birthday" />
          <NumberField source="active" />
          <BooleanField source="owned" />
          <TextField source="accounttype.name" />
          <NumberField source="xpub.name" />
      </Datagrid>
  </List>
);