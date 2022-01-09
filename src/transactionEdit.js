import * as React from "react"
import { Edit, SimpleForm, TextInput } from 'react-admin'

const TransactionTitle = ({ record }) => {
  return <span>Transaction {record ? `"${record.id}"` : ''}</span>;
};

export const TransactionEdit = (props) => (
  <Edit title={<TransactionTitle />} {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput label="Category" source="category.name" />
          <TextInput multiline source="description" />
      </SimpleForm>
  </Edit>
);