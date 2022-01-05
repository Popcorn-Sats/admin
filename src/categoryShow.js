import * as React from "react"
import { Show, Toolbar, TextField, RichTextField, NumberField, ReferenceManyField, Datagrid } from 'react-admin'
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

export const CategoryShow = (props) => {
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
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                        </Grid>
                    </Grid>
                    <Spacer />
                    <ReferenceManyField reference="transactions" target="_nested_category_id" >
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