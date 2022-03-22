
import * as React from 'react';
import AccountBalance from '@material-ui/icons/AccountBalance';
import { useTranslate } from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: string;
}

const NetPosition = (props: Props) => {
    const { value } = props;
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="/commands"
            icon={AccountBalance}
            title={translate('dashboard.net_position')}
            subtitle={value}
        />
    );
};

export default NetPosition;