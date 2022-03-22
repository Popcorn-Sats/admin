import * as React from 'react';
import {
    Avatar,
    Box,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TransactionIcon from '@material-ui/icons/Payment';
import { Link } from 'react-router-dom';
import { useTranslate, useQueryWithStore } from 'react-admin';
import { subDays } from 'date-fns';

import CardWithIcon from './CardWithIcon';

import Transfer from '@material-ui/icons/CompareArrows';
import Deposit from '@material-ui/icons/CallReceived';
import Coinjoin from '@material-ui/icons/CallMerge';
import Withdrawal from '@material-ui/icons/CallMade';

const TransactionType = ({transactiontype}) => {
    switch (transactiontype) {
        case 'transfer':
            return <Transfer />;
        case 'deposit':
            return <Deposit />;
        case 'withdrawal':
            return <Withdrawal />;
        case 'coinjoin':
            return <Coinjoin />;
        default:
            return <Transfer />;
    }
}

const NewTransactions = () => {
    const translate = useTranslate();
    const classes = useStyles();

    const aMonthAgo = subDays(new Date(), 30);
    aMonthAgo.setDate(aMonthAgo.getDate() - 30);
    aMonthAgo.setHours(0);
    aMonthAgo.setMinutes(0);
    aMonthAgo.setSeconds(0);
    aMonthAgo.setMilliseconds(0);

    const { loaded, data: visitors } = useQueryWithStore({
        type: 'getList',
        resource: 'transactions',
        payload: {
            filter: {
                has_ordered: true,
                first_seen_gte: aMonthAgo.toISOString(),
            },
            sort: { field: 'first_seen', order: 'DESC' },
            pagination: { page: 1, perPage: 10 },
        },
    });

    if (!loaded) return null;

    const nb = visitors ? visitors.reduce((nb) => ++nb, 0) : 0;
    return (
        <CardWithIcon
            to="/transactions"
            icon={TransactionIcon}
            title={translate('dashboard.new_transactions')}
            subtitle={nb}
        >
            <List>
                {visitors
                    ? visitors.map((record) => (
                          <ListItem
                              button
                              to={`/transactions/${record.id}`}
                              component={Link}
                              key={record.id}
                          >
                              <ListItemAvatar>
                                <TransactionType transactiontype={record.transactiontype} />
                              </ListItemAvatar>
                              <ListItemText
                                  primary={`Balance change: ${record.balance_change}`}
                                  secondary={`Block Height: ${record.block.height}`}
                              />
                          </ListItem>
                      ))
                    : null}
            </List>
            <Box flexGrow="1">&nbsp;</Box>
            <Button
                className={classes.link}
                component={Link}
                to="/transactions"
                size="small"
                color="primary"
            >
                <Box p={1} className={classes.linkContent}>
                    {translate('dashboard.all_transactions')}
                </Box>
            </Button>
        </CardWithIcon>
    );
};

const useStyles = makeStyles(theme => ({
    link: {
        borderRadius: 0,
    },
    linkContent: {
        color: theme.palette.primary.main,
    },
}));

export default NewTransactions;