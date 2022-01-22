import * as React from "react"
import { useNotify, useRefresh, useRedirect, Create, ReferenceInput, SelectInput, SimpleForm, TextInput, ArrayInput, SimpleFormIterator, NumberInput } from 'react-admin'
import {
  Box,
  Typography,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const Spacer = () => <Box m={1}>&nbsp;</Box>;

const useStyles = makeStyles({
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
});

export const TransactionCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const classes = useStyles();

const onSuccess = ({ data }) => {
  notify(`Created transaction "${data.description}"`);
  redirect('/accounts');
  refresh();
};

  return (
    <Create title="Create a new transaction" onSuccess={onSuccess} mutationMode="pessimistic" {...props}>
        <SimpleForm>
            <ReferenceInput label="Category" source="category.id" reference="categories"><SelectInput optionText="name"></SelectInput></ReferenceInput>
            <TextInput multiline source="description" />
            <Typography variant="h4" gutterBottom fullWidth>
                Transaction Ledgers
            </Typography>
            <Box fullWidth>
              <Typography variant="h5" gutterBottom>
                  Debits
              </Typography>
              <ArrayInput source="debitsLedger">
                <SimpleFormIterator>
                  <ReferenceInput label="Account" source="account.id" reference="accounts"><SelectInput optionText="name"></SelectInput></ReferenceInput>
                  <NumberInput disabled label="Amount" source="amount" formClassName={classes.inlineBlock} />
                  <TextInput disabled label="Address" source="utxo.address.address" formClassName={classes.inlineBlock} />
                  <TextInput disabled label="UTXO" source="utxo.utxo" formClassName={classes.inlineBlock} />
                </SimpleFormIterator>
              </ArrayInput>
            </Box>
            <Spacer />

            <Box fullWidth>
              <Typography variant="h5" gutterBottom>
                  Credits
              </Typography>
              <ArrayInput source="creditsLedger">
              <SimpleFormIterator>
                  <ReferenceInput label="Account" source="account.id" reference="accounts"><SelectInput optionText="name"></SelectInput></ReferenceInput>
                  <NumberInput disabled label="Amount" source="amount" formClassName={classes.inlineBlock} />
                  <TextInput disabled label="Address" source="utxo.address.address" formClassName={classes.inlineBlock} />
                  <TextInput disabled label="UTXO" source="utxo.utxo" formClassName={classes.inlineBlock} />
                </SimpleFormIterator>
              </ArrayInput>
            </Box>
            <Spacer />
        </SimpleForm>
    </Create>
  )
};