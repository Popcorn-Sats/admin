import AccountIcon from '@material-ui/icons/AccountBalance';

import AccountList from './accountList';
import { AccountShow } from "./accountShow"
import { AccountEdit } from "./accountEdit"
import { AccountCreate } from "./accountCreate"

const transactions = {
    list: AccountList,
    show: AccountShow,
    edit: AccountEdit,
    create: AccountCreate,
    icon: AccountIcon,
}
   
export default transactions