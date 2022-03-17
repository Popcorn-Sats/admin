import * as React from "react"
import { List, Datagrid, TextField } from 'react-admin'
import CategoryChart from "./CategoryPie"

const styles = {
  flex: { display: 'flex' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  leftCol: { flex: 1, marginRight: '0.5em' },
  rightCol: { marginLeft: '0.5em', maxWidth: '30em' },
  singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const CategoryList = props => (
  <>
    {/* <div style={styles.flex}> */}
      <CategoryChart />
      <Spacer />
    {/* </div> */}
    <div style={styles.singleCol}>
      <List {...props}>
          <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="balance" />
          </Datagrid>
      </List>
    </div>
  </>
)

export default CategoryList