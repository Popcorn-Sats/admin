import * as React from "react"
import { useNotify, useRefresh, useRedirect, Create, SimpleForm, TextInput } from 'react-admin'

export const CategoryCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = ({ data }) => {
    notify(`Changes to category "${data.name}" saved`);
    redirect('/categories');
    refresh();
  };

  return (
    <Create title="Create a new category" onSuccess={onSuccess} mutationMode="pessimistic" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Create>
  )
};