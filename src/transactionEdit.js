import * as React from "react"
import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin'

const TransactionTitle = ({ record }) => {
  return <span>Transaction {record?.description ? `"${record.description}"` : `${record.id}`}</span>;
};

export const TransactionEdit = (props) => (
  <Edit title={<TransactionTitle />} {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <ReferenceInput label="Category" source="category.id" reference="categories"><SelectInput optionText="name"></SelectInput></ReferenceInput>
          <TextInput multiline source="description" />
      </SimpleForm>
  </Edit>
);