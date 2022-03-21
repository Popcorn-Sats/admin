import * as React from "react"
import { List, Datagrid, TextField, TextInput } from 'react-admin'
import CategoryChart from "./CategoryPie"
import CategoryBar from "./CategoryBar"

const styles = {
  flex: { display: 'flex' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  flexPie: { flex: 2 },
  flexBar: { flex: 3 },
  leftCol: { flex: 1, marginRight: '0.5em' },
  rightCol: { marginLeft: '0.5em', maxWidth: '30em' },
  singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const categoryFilters = [
  // <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Category Name" source="name" />,
];

const CategoryList = props => (
  <>
    <div style={styles.flex}>
      <div style={styles.flexPie}>
        <CategoryChart />
      </div>
      <Spacer />
      <div style={styles.flexBar}>
        <CategoryBar />
      </div>
    </div>
    <div style={styles.singleCol}>
      <List {...props} filters={categoryFilters}>
          <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="balance" sortable={false} />
          </Datagrid>
      </List>
    </div>
  </>
)

export default CategoryList