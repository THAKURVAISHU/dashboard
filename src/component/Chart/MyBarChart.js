import React from 'react';
import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiFillCaretDown } from 'react-icons/ai';

const MyBarChart = () => {
    const data = [
        {
            name: 'Jan',
            value: 20,
            fill: '#cccccc',
        },
        {
            name: 'Feb',
            value: 10,
            fill: '#cccccc',
        },
        {
            name: 'Mar',
            value: 40,
            fill: '#cccccc',
        },
        {
            name: 'Apr',
            value: 32,
            fill: '#cccccc',
        },
        {
            name: 'May',
            value: 15,
            fill: '#cccccc',
        },
        {
            name: 'Jun',
            value: 9,
            fill: '#cccccc',
        },
        {
            name: 'Jul',
            value: 15,
            fill: '#cccccc',
        },
        {
            name: 'Aug',
            value: 40,
            fill: '#4828bb',
        },
        {
            name: 'Sep',
            value: 35,
            fill: '#cccccc',
        },
        {
            name: 'Oct',
            value: 25,
            fill: '#cccccc',
        },
        {
            name: 'Nov',
            value: 15,
            fill: '#cccccc',
        },
        {
            name: 'Dec',
            value: 28,
            fill: '#cccccc',
        },
    ];
    const CustomBar = (props) => {
        const { x, y, width, height, fill, value, name } = props;
        const borderRadius = 10;
    
        return (
            <g transform={`translate(${x},${y})`}>
                <rect width={width} height={height} rx={borderRadius} ry={borderRadius} fill={fill} />
                <text x={width / 2} y={height + 15} textAnchor="middle" fill="#000">{name}</text>
            </g>
        );
    };
      
    return (
        <div className="col bigger">
            <div className="Chart">
                <div className="column">
                    <h3>Overview</h3>
                    <p>Month Earning</p>
                </div>
                <div className="column right">
                    <p>Quarterly <AiFillCaretDown /></p>
                </div>
            </div>

            <ResponsiveContainer width="89%" height={300} className="responsive">
                <BarChart width={600} height={300} data={data} className='bar'>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" shape={<CustomBar/>} />
                </BarChart>
            </ResponsiveContainer>
           
        </div>
    );
}

export default MyBarChart;
