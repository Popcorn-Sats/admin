import * as React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import {
    ResponsiveContainer,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ComposedChart,
    Bar,
    Line,
} from 'recharts';
import { useTranslate } from 'react-admin';
import { format, subDays, addDays } from 'date-fns';

const lastDay = new Date();
const lastMonthDays = Array.from({ length: 30 }, (_, i) => subDays(lastDay, i));
const aMonthAgo = subDays(new Date(), 30);

const dateFormatter = (date) =>
    new Date(date).toLocaleDateString();

const aggregateOrdersByDay = (orders) =>
    orders
        .filter((order) => order.status !== 'cancelled')
        .reduce((acc, curr) => {
            const height = curr.block.height;
            if (!acc[height]) {
                acc[height] = 0;
            }
            acc[height] += curr.runningBalance;
            return acc;
        }, {});

const getRevenuePerDay = (orders) => {
    const daysWithRevenue = aggregateOrdersByDay(orders);
    console.log(daysWithRevenue);
    return Object.keys(daysWithRevenue).map((day) => ({
        date: Number(day),
        netWorth: daysWithRevenue[day],
        income: daysWithRevenue[day] / 2,
        netRevenue: daysWithRevenue[day] / 2,
    }));
    /* return lastMonthDays.map(date => ({
        date: date.getTime(),
        total: daysWithRevenue[format(date, 'YYYY-MM-DD')] || 0,
    })); */
};

const NetWorthChart = ({ orders }) => {
    const translate = useTranslate();
    if (!orders) return null;

    return (
        <Card>
            <CardHeader title={translate('dashboard.net_position')} />
            <CardContent>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      <ComposedChart
                        data={getRevenuePerDay(orders)}
                        margin={{
                          top: 20,
                          right: 80,
                          bottom: 40,
                          left: 100,
                        }}
                      >
                        <XAxis
                            dataKey="date"
                            name="Block Height"
                            label={{ value: 'Block Height', offset: -20, position: 'insideBottom' }}
                            // type="number"
                            // scale="time"
                            /* domain={[
                                addDays(aMonthAgo, 1).getTime(),
                                new Date().getTime(),
                            ]}
                            tickFormatter={dateFormatter} */
                        />
                        <YAxis 
                          dataKey="netWorth" 
                          name="Net Position" 
                          unit=" sats"
                          label={{ value: 'Net worth', offset: -80, angle: -90, position: 'insideLeft' }} />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Tooltip
                            cursor={{ strokeDasharray: '3 3' }}
                            formatter={(value) =>
                                new Intl.NumberFormat(undefined, {
                                }).format(value)
                            }
                            labelFormatter={(label) =>
                              new Intl.NumberFormat(undefined, {
                              }).format(label)
                            }
                        />
                        <defs>
                            <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#8884d8"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#8884d8"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            type="monotone"
                            dataKey="netWorth"
                            stroke="#8884d8"
                            strokeWidth={2}
                            fill="url(#colorUv)"
                        />
                        <Bar dataKey="income" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="netRevenue" stroke="#ff7300" />
                      </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default NetWorthChart;