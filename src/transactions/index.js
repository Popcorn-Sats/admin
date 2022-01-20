import TransactionIcon from '@material-ui/icons/Receipt';

import TransactionList from './transactionList';
import { TransactionShow } from "./transactionShow"
import { TransactionEdit } from "./transactionEdit"
// import { TransactionCreate } from "./transactionCreate"

const transactions = {
    list: TransactionList,
    show: TransactionShow,
    edit: TransactionEdit,
    // create: TransactionCreate,
    icon: TransactionIcon,
}
   
export default transactions