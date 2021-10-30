import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, NumberField, BooleanField } from 'react-admin';

export const AccountShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
          <TextField source="id" />
          <TextField source="name" />
          <RichTextField source="notes" />
          <DateField source="birthday" />
          <NumberField source="active" />
          <BooleanField source="owned" />
          <TextField label="Publication date" source="createdAt" />
          <DateField source="updatedAt" />
          <TextField source="accounttype.name" />
          <NumberField source="xpub.id" />
          <NumberField source="accounttype.id" />
        </SimpleShowLayout>
    </Show>
);