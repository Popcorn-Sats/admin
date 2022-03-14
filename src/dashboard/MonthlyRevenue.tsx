
import * as React from 'react';
import BitcoinIcon from '@material-ui/icons/ShowChart';
import { useTranslate } from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: string;
}

const MonthlyRevenue = (props: Props) => {
    const { value } = props;
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="/commands"
            icon={BitcoinIcon}
            title={translate('dashboard.net_position')}
            subtitle={value}
        />
    );
};

export default MonthlyRevenue;