import * as React from "react"
import { useNotify, useRefresh, useRedirect, Create, SimpleForm, TextInput, DateInput, BooleanInput, SelectInput } from 'react-admin'

export const AccountCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = ({ data }) => {
    notify(`Changes to account "${data.name}" saved`);
    redirect('/accounts');
    refresh();
  };

  const outputScripts = [
    {id: 'P2PKH', name: 'P2PKH'},
    {id: 'P2SH', name: 'P2SH'},
    {id: 'P2WPKH', name: 'P2WPKH'}
  ]

  const accountTypes = [
    {id: 0, name: 'Fees'},
    {id: 1, name: 'Wallet'},
    {id: 2, name: 'Vault'},
    {id: 3, name: 'Expense'},
    {id: 4, name: 'Income'}
  ]

  return (
    <Create title="Create a new account" onSuccess={onSuccess} mutationMode="pessimistic" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="notes" />
            <DateInput source="birthday" />
            <BooleanInput source="active" defaultValue={true} />
            <BooleanInput source="owned" defaultValue={true} />
            <TextInput label="Xpub" source="publicKey" />
            <SelectInput source="purpose" choices={outputScripts} />
            <SelectInput source="accounttypeId" choices={accountTypes} />
        </SimpleForm>
    </Create>
  )
};