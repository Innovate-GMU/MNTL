import React, { PureComponent } from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

  render() {
    return (
        <>
        <IndexNavbar/>
        <div className="header relative pt-16 items-center flex ">
        <div className="container mx-auto justify-center flex">
          <div className="w-full px-4 my-4">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
        </div>
        </div>
        </div>
        <Footer/>
        </>
    );
  }
}
