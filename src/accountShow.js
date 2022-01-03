import * as React from "react"
import { Show, Labeled, Toolbar, TextField, DateField, RichTextField, NumberField, BooleanField, ReferenceManyField, Datagrid } from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  header: {
      fontSize: '1.25rem',
  },
  xpub: {
    // TODO: shorten with ellipses
  },
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

const Spacer = () => <Box m={1}>&nbsp;</Box>;

export const AccountShow = (props) => {
  const classes = useStyles()
  return (
    <Show {...props}>
      <Box>
            <Card>
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={8}>
                            <Typography variant="h6" gutterBottom>
                              <TextField source="name" className={classes.header} />
                            </Typography>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                  <Box mt={2}>
                                    <Labeled
                                          source="Account Type"
                                          resource="commands"
                                      >
                                          <TextField
                                              source="accounttype.name"
                                          />
                                      </Labeled>
                                  </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                  <Box mt={2}>
                                    <Labeled
                                      source="notes"
                                      resource="commands"
                                    >
                                      <TextField
                                        source="notes"
                                      />
                                    </Labeled>
                                  </Box>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Labeled
                                        source="birthday"
                                        resource="commands"
                                    >
                                        <DateField
                                            source="birthday"
                                        />
                                    </Labeled>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Labeled
                                        source="active"
                                        resource="commands"
                                    >
                                        <BooleanField source="active" />
                                    </Labeled>
                                    <Labeled
                                        source="owned"
                                        resource="commands"
                                    >
                                        <BooleanField source="owned" />
                                    </Labeled>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                              XPub
                            </Typography>
                                <Box display="flex" flexDirection="column">
                                    <TextField
                                        source="xpub.name"
                                        className={classes.xpub}
                                    />
                                    <TextField source="xpub.purpose" />
                              </Box>
                            <Spacer />

                            <Typography variant="h6" gutterBottom>
                                Balance
                            </Typography>
                            <NumberField source="balance" />
                        </Grid>
                    </Grid>
                    <Spacer />
                    <ReferenceManyField reference="transactions" target="_nested_account_id" >
                      <Datagrid rowClick="show">
                          <NumberField label="Block height" source="block.height" />
                          <TextField label="Type" source="transactiontype" />
                          <TextField label="Category" source="category.name" />
                          <RichTextField source="description" />
                          <NumberField source="balance_change" />
                          <NumberField source="runningBalance" />
                      </Datagrid>
                  </ReferenceManyField>
                </CardContent>
                <Toolbar
                    /* record={formProps.record}
                    basePath={formProps.basePath}
                    undoable={true}
                    invalid={formProps.invalid}
                    handleSubmit={formProps.handleSubmit}
                    saving={formProps.saving}
                    resource="commands" */
                />
            </Card>
        </Box>
    </Show>
  )
}