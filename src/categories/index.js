import CategoryIcon from '@material-ui/icons/Bookmark';

import CategoryList from './categoryList';
import { CategoryShow } from "./categoryShow"
import { CategoryEdit } from "./categoryEdit"
import { CategoryCreate } from "./categoryCreate"

const categories = {
    list: CategoryList,
    show: CategoryShow,
    edit: CategoryEdit,
    create: CategoryCreate,
    icon: CategoryIcon,
}
   
export default categories