import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart,Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const datas = useLoaderData();
    const dataItem = datas.data;


    return (
        <div>
            <BarChart width={400} height={500} data={dataItem}>
            <XAxis dataKey="name" stroke="#dda45b"></XAxis>
            <YAxis dataKey="total" stroke="#dda45b"></YAxis>
            <Bar dataKey="total" fill="#dda45b" barSize={20} />
            
            <Tooltip></Tooltip>
            <Legend></Legend>
            </BarChart>
        </div>
    );
};

export default Statistics;