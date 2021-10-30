import * as React from "react";
import { List, Datagrid, TextField, DateField, BooleanField, RichTextField, ChipField } from 'react-admin';

export const AccountList = props => (
  <List {...props}>
      <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <RichTextField source="notes" />
          <DateField source="birthday" />
          <BooleanField source="active" />
          <BooleanField source="owned" />
          <ChipField label="Type" source="accounttype.name" />
          <TextField label="XPub" source="xpub.name" />
      </Datagrid>
  </List>
);