import * as React from "react"
import { useNotify, useRefresh, useRedirect, Edit, SimpleForm, TextInput, BooleanInput, SelectInput } from 'react-admin'

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

  const accountTypes = [
    {id: 0, name: 'Fees'},
    {id: 1, name: 'Wallet'},
    {id: 2, name: 'Vault'},
    {id: 3, name: 'Expense'},
    {id: 4, name: 'Income'}
  ]

  return (
    <Edit onSuccess={onSuccess} mutationMode="pessimistic" title={<AccountTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="notes" />
            <BooleanInput source="active" />
            <BooleanInput source="owned" />
            <SelectInput label="Account Type" source="accounttype.id" choices={accountTypes} />
        </SimpleForm>
    </Edit>
  )
};