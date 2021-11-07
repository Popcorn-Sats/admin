import * as React from 'react';
import {
    DateField,
    Labeled,
    ReferenceField,
    TextField,
    Toolbar,
    Show
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

const CustomerDetails = () => (
    <Box display="flex" flexDirection="column">
        <Typography
            component={RouterLink}
            color="primary"
            /* to={`/customers/${record?.id}`} */
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
);

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
);

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
                              <strong>Transaction</strong>
                            </Typography>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Labeled
                                        source="date"
                                        resource="commands"
                                    >
                                        <DateField
                                            source="block.date"
                                        />
                                    </Labeled>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Labeled
                                        source="reference"
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
                                <Typography variant="h6" gutterBottom>
                                Something
                            </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Box mt={2}>
                                    <Typography variant="h6" gutterBottom>
                                Something
                            </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                            Something
                            </Typography>
                            <ReferenceField
                                source="txid"
                                resource="commands"
                                reference="accounts"
                                basePath="/accounts"
                                /* record={formProps.record} */
                                link={false}
                            >
                                <CustomerDetails />
                            </ReferenceField>
                            <Spacer />

                            <Typography variant="h6" gutterBottom>
                                Something
                            </Typography>
                            <ReferenceField
                                source="address"
                                resource="commands"
                                reference="accounts"
                                basePath="/accounts"
                                /* record={formProps.record} */
                                link={false}
                            >
                                <CustomerAddress />
                            </ReferenceField>
                        </Grid>
                    </Grid>
                    <Spacer />

                    <Typography variant="h6" gutterBottom>
                        Transaction Ledgers
                    </Typography>
                    <Box>
                        TODO: Transaction ledgers component
                        {/* <Basket record={formProps.record} /> */}
                    </Box>
                    <Spacer />

                    <Typography variant="h6" gutterBottom>
                      Totals
                    </Typography>
                    <Box>
                        TODO: Totals component
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