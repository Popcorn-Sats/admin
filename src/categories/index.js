import CategoryIcon from '@material-ui/icons/Bookmark';

import CategoryList from './categoryList';
import { CategoryShow } from "./categoryShow"
import { CategoryEdit } from "./categoryEdit"
import { CategoryCreate } from "./categoryCreate"
   
export default {
    list: CategoryList,
    show: CategoryShow,
    edit: CategoryEdit,
    create: CategoryCreate,
    icon: CategoryIcon,
};