import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { useTranslate, useDataProvider } from 'react-admin';

const CategoryBar = () => {
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

    const testData = [
      {
        name: 'January',
        Income: 4000,
        Coinjoin: 2400,
        Fees: 2400,
      },
      {
        name: 'February',
        Income: 3000,
        Coinjoin: 1398,
        Fees: 2210,
      },
      {
        name: 'March',
        Income: 2000,
        Coinjoin: 9800,
        Fees: 2290,
      },
      {
        name: 'April',
        Income: 2780,
        Coinjoin: 3908,
        Fees: 2000,
      },
      {
        name: 'May',
        Income: 1890,
        Coinjoin: 4800,
        Fees: 2181,
      },
      {
        name: 'June',
        Income: 2390,
        Coinjoin: 3800,
        Fees: 2500,
      },
      {
        name: 'July',
        Income: 3490,
        Coinjoin: 4300,
        Fees: 2100,
      },
    ];

    return (
        <Card>
            <CardHeader title={translate('dashboard.monthly_expenditure')} />
            <CardContent>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      <BarChart
                        width={500}
                        height={300}
                        data={testData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Coinjoin" stackId="a" fill="#8884d8" />
                        <Bar dataKey="Fees" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="Income" fill="#ffc658" />
                      </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default CategoryBar;