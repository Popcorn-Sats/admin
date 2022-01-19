import * as React from "react"
import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput, ArrayInput, SimpleFormIterator, NumberInput } from 'react-admin'
import {
  Box,
  Typography,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const TransactionTitle = ({ record }) => {
  return <span>Transaction {record?.description ? `"${record.description}"` : `${record.id}`}</span>;
};

const Spacer = () => <Box m={1}>&nbsp;</Box>;

const useStyles = makeStyles({
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
});

export const TransactionEdit = (props) => {
  const classes = useStyles();
  return (
    <Edit title={<TransactionTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
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
                <SimpleFormIterator disableRemove disableAdd disableReordering >
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
              <SimpleFormIterator disableRemove disableAdd disableReordering >
                  <ReferenceInput label="Account" source="account.id" reference="accounts"><SelectInput optionText="name"></SelectInput></ReferenceInput>
                  <NumberInput disabled label="Amount" source="amount" formClassName={classes.inlineBlock} />
                  <TextInput disabled label="Address" source="utxo.address.address" formClassName={classes.inlineBlock} />
                  <TextInput disabled label="UTXO" source="utxo.utxo" formClassName={classes.inlineBlock} />
                </SimpleFormIterator>
              </ArrayInput>
            </Box>
            <Spacer />
        </SimpleForm>
    </Edit>
  )
};