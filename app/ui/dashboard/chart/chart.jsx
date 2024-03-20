"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    ripe: 1500,
    underripe: 2400,
    unripe: 2400,
    overripe: 3400,
  },
  {
    name: "Feb",
    ripe: 3000,
    underripe: 3400,
    unripe: 2400,
    overripe: 3400,
  },
  {
    name: "Mar",
    ripe: 2000,
    underripe: 3200,
    unripe: 2400,
    overripe: 3200,
  },
  {
    name: "Apr",
    ripe: 3500,
    underripe: 2400,
    unripe: 2400,
    overripe: 3400,
  },
  {
    name: "May",
    ripe: 2400,
    underripe: 1400,
    unripe: 2400,
    overripe: 3400,
  },
  {
    name: "Jun",
    ripe: 1500,
    underripe: 3300,
    unripe: 2400,
    overripe: 800,
  },
  {
    name: "July",
    ripe: 3500,
    underripe: 2400,
    unripe: 1400,
    overripe: 2500,
  },
  {
    name: "Aug",
    ripe: 2500,
    underripe: 1400,
    unripe: 1400,
    overripe: 2500,
  },
  {
    name: "Sept",
    ripe: 3500,
    underripe: 2400,
    unripe: 1400,
    overripe: 1500,
  },
  {
    name: "Oct",
    ripe: 1500,
    underripe: 400,
    unripe: 1400,
    overripe: 1500,
  },
  {
    name: "Nov",
    ripe: 3500,
    underripe: 2400,
    unripe: 1400,
    overripe: 3500,
  },
  {
    name: "Dec",
    ripe: 2500,
    underripe: 2400,
    unripe: 1400,
    overripe: 4200,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Yearly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="ripe"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="underripe"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
