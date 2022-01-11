import * as React from "react"
import { Edit, SimpleForm, TextInput } from 'react-admin'

const CategoryTitle = ({ record }) => {
  return <span>Category {record ? `"${record.id}"` : ''}</span>;
};

export const CategoryEdit = (props) => (
  <Edit title={<CategoryTitle />} {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
      </SimpleForm>
  </Edit>
);