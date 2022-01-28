import * as React from 'react';
import {
    DateField,
    Labeled,
    ReferenceField,
    TextField,
    Toolbar,
    Show,
    ArrayField,
    NumberField,
    Datagrid,
} from 'react-admin';
import { Link as RouterLink } from 'react-router-dom';
import {
    Card,
    CardContent,
    Box,
    Grid,
    Typography,
    Link,
} from '@material-ui/core'

const CustomerAddress = () => (
    <Box>
        <Typography>
            Something
        </Typography>
        <Typography>Something else</Typography>
        <Typography>
            Another something
        </Typography>
    </Box>
)

const Spacer = () => <Box m={1}>&nbsp;</Box>;

export const TransactionShow = (props) => {
    return (
      <Show {...props}>
        <Box>
            <Card>
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={8}>
                            <Typography variant="h6" gutterBottom>
                              <strong>Transaction—{<TextField
                                            source="transactiontype"
                                        />}</strong>
                            </Typography>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Labeled
                                        source="date"
                                        resource="commands"
                                    >
                                        <DateField
                                            source="timestamp"
                                            showTime
                                        />
                                    </Labeled>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Labeled
                                        source="block height"
                                        resource="commands"
                                    >
                                        <TextField
                                            source="block.height"
                                        />
                                    </Labeled>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                  <Box mt={2}>
                                    <Labeled
                                          source="category"
                                          resource="commands"
                                      >
                                          <TextField
                                              source="category.name"
                                          />
                                      </Labeled>
                                  </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                  <Box mt={2}>
                                    <Labeled
                                      source="description"
                                      resource="commands"
                                    >
                                      <TextField
                                        source="description"
                                      />
                                    </Labeled>
                                  </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                              Transaction Data
                            </Typography>
                                <Box display="flex" flexDirection="column">
                                  <Typography
                                      component={RouterLink}
                                      color="primary"
                                      /* to={`/accounts/${account?.id}`} */
                                      style={{ textDecoration: 'none' }}
                                  >
                                      Account
                                  </Typography>
                                  <Typography
                                      component={Link}
                                      color="primary"
                                      /* href={`mailto:${record?.email}`} */
                                      style={{ textDecoration: 'none' }}
                                  >
                                      Something else
                                  </Typography>
                              </Box>
                            <Spacer />

                            <Typography variant="h6" gutterBottom>
                                Something
                            </Typography>
                            {/* <ReferenceField
                                source="address"
                                resource="commands"
                                reference="accounts"
                                basePath="/accounts"
                                // record={formProps.record}
                                link={false}
                            > */}
                                <CustomerAddress />
                            {/* </ReferenceField> */}
                        </Grid>
                    </Grid>
                    <Spacer />

                    <Typography variant="h6" gutterBottom>
                        Transaction Ledgers
                    </Typography>
                    <Box>
                      <Typography variant="h7" gutterBottom>
                          <strong>Debits</strong>
                      </Typography>
                      <ArrayField source="debitsLedger">
                        <Datagrid>
                          <TextField label="Account" source="account.name" />
                          <NumberField source="amount" />
                          <TextField label="Address" source="utxo.address.address" />
                          {/* <TextField source="transactiontypeId" /> */}
                          <TextField label="UTXO" source="utxo.utxo" />
                        </Datagrid>
                      </ArrayField>
                    </Box>
                    <Spacer />

                    <Box>
                      <Typography variant="h7" gutterBottom>
                          <strong>Credits</strong>
                      </Typography>
                      <ArrayField source="creditsLedger">
                        <Datagrid>
                          <TextField label="Account" source="account.name" />
                          <NumberField source="amount" />
                          <TextField label="Address" source="utxo.address.address" />
                          {/* <TextField source="transactiontypeId" /> */}
                          <TextField label="UTXO" source="utxo.utxo" />
                        </Datagrid>
                      </ArrayField>
                    </Box>
                    <Spacer />

                    <Typography variant="h6" gutterBottom>
                      Totals
                    </Typography>
                    <Box>
                        TODO: Totals component <br />
                        <TextField source="balance_change" />
                        {/* <Totals record={formProps.record} /> */}
                    </Box>
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