import * as React from "react"
import { useNotify, useRefresh, useRedirect, Edit, SimpleForm, TextInput } from 'react-admin'

const CategoryTitle = ({ record }) => {
  return <span>Category {record ? `"${record.id}"` : ''}</span>;
};

export const CategoryEdit = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = ({ data }) => {
    notify(`Changes to category "${data.name}" saved`);
    redirect('/categories');
    refresh();
  };

  return (
    <Edit onSuccess={onSuccess} mutationMode="pessimistic" title={<CategoryTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
  )
};