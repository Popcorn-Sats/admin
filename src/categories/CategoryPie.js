import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Sector,
    Cell,
} from 'recharts';
import { useTranslate, useDataProvider } from 'react-admin';

const flipNegValues = (categories) => {
    return categories.map((category) => ({
        name: category.name,
        balance: Math.abs(category.balance),
    }));
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  console.log({props})
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value, name } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${name}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`${value} sats`}
      </text>
    </g>
  );
};

const CategoryChart = () => {
    const [state, setState] = useState({
        categories: [],
        activeIndex: 0,
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

    const onPieEnter = (_, index) => {
      setState(state => ({
        ...state,
        activeIndex: index,
      }));
    };

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);
      
    console.log({state})
    const {categories, activeIndex} = state;
    console.log({ "categories from state": categories.data });

    const translate = useTranslate();
    if (!categories) return null;

    const testData = [{name: 'Group A', balance: -400}, {name: 'Group B', balance: -300}];

    const data = categories.data || testData; // FIXME: This is a hack to get the chart to render. Need to send data in props.

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <Card>
            <CardHeader title={translate('dashboard.monthly_expenditure')} />
            <CardContent>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={flipNegValues(data)}
                                dataKey="balance" // FIXME: Need to set 0 as default value for balance.
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                onMouseEnter={onPieEnter}
                            >
                              {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default CategoryChart;