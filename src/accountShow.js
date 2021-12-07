import * as React from "react"
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, NumberField, BooleanField, ReferenceManyField, Datagrid } from 'react-admin'
import { Button, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ReceiptIcon from '@material-ui/icons/Receipt'

const useStyles = makeStyles(theme => ({
  root: {
      padding: 20,
      marginTop: theme.spacing(2),
      marginBottom: '1em',
  },
  actions: {
      [theme.breakpoints.down('md')]: {
          padding: 0,
          flexWrap: 'wrap',
          '& a': {
              marginTop: '1em',
              marginLeft: '0!important',
              marginRight: '1em',
          },
      },
  },
}));

export const AccountShow = (props) => {
  const classes = useStyles()
  return (
    <Show {...props}>
        <SimpleShowLayout className={classes.root}>
          <TextField source="id" />
          <TextField source="name" />
          <RichTextField source="notes" />
          <DateField source="birthday" />
          <NumberField source="active" />
          <BooleanField source="owned" />
          <TextField label="Publication date" source="createdAt" />
          <DateField source="updatedAt" />
          <TextField source="accounttype.name" />
          <NumberField source="xpub.id" />
          <NumberField source="accounttype.id" />
          <ReferenceManyField reference="transactions" target="_nested_account_id" >
              <Datagrid rowClick="show">
                  <NumberField label="Block height" source="block.height" />
                  <TextField label="Type" source="transactiontype.type" />
                  <TextField label="Category" source="category.name" />
                  <RichTextField source="description" />
                  <NumberField source="balance_change" />
                  <NumberField source="runningBalance" />
              </Datagrid>
            {/* <Button
                className={classes.actions}
                variant="contained"
                href={`/#/transactions/account/141`} // TODO: API call to transactions/account/:accountId
                startIcon={<ReceiptIcon />}
            >
                View Transactions
            </Button> */}
          </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
  )
}