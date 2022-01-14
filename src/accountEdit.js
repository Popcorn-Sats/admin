import * as React from "react"
import { useNotify, useRefresh, useRedirect, Edit, SimpleForm, TextInput, BooleanInput/* , ReferenceInput, SelectInput */ } from 'react-admin'

const AccountTitle = ({ record }) => {
  return <span>Account {record ? `"${record.name}"` : ''}</span>;
};

export const AccountEdit = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = ({ data }) => {
    notify(`Changes to account "${data.name}" saved`);
    redirect('/accounts');
    refresh();
  };

  return (
    <Edit onSuccess={onSuccess} mutationMode="pessimistic" title={<AccountTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="notes" />
            <BooleanInput source="active" />
            <BooleanInput source="owned" />
            {/* <ReferenceInput label="Account Type" source="accounttype.name" reference="accounttypes"><SelectInput optionText="name"></SelectInput></ReferenceInput> */}
            {/* TODO: hard-code or query account types */}
        </SimpleForm>
    </Edit>
  )
};