import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
} from 'recharts';
import { useTranslate, useDataProvider } from 'react-admin';

const flipNegValues = (categories) => {
    return categories.map((category) => ({
        name: category.name,
        balance: Math.abs(category.balance),
    }));
};

const CategoryChart = () => {
    const [state, setState] = useState({
        categories: [],
    });
    const dataProvider = useDataProvider();

    const fetchCategories = useCallback(async () => {
      const categories = await dataProvider.getList(
        'categories',
        {
            sort: { field: 'date', order: 'DESC' },
            pagination: { page: 1, perPage: 50 }, // TODO: Decide reasonable limit here and order by balance
        }
      )
      console.log({"fetch ctageories": categories})
      setState(state => ({
        ...state,
        categories,
      }));
    }, [dataProvider]);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);
      
    console.log({state})
    const {categories} = state;
    console.log({ "categories from state": categories.data });

    const translate = useTranslate();
    if (!categories) return null;

    const testData = [{name: 'Group A', balance: -400}, {name: 'Group B', balance: -300}];

    return (
        <Card>
            <CardHeader title={translate('dashboard.monthly_expenditure')} />
            <CardContent>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={flipNegValues(categories.data || testData)} // FIXME: This is a hack to get the chart to render. Need to send data in props.
                                dataKey="balance" // FIXME: Need to set 0 as default value for balance.
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default CategoryChart;