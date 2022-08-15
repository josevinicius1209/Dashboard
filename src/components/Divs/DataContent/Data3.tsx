import React from "react";
import { PlansBox } from "../../Box/styles";
import ReactApexChart from "react-apexcharts";

const Data3: React.FC = () => {
  const options = {
    chart: {
      height: 400,
    },
    title: {
      text: "Gráfico 2",
      style: {
        fontSize: "15px",
      },
    },
    colors: ["#008FFB"],
  };

  const series = [
    {
      name: "Metric1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Metric2",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Metric3",
      data: [80, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Metric4",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Metric5",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Metric6",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];

  return (
    <PlansBox>
      <ReactApexChart
        type="heatmap"
        options={options}
        series={series}
        height="90%"
      />
    </PlansBox>
  );
};

export default Data3;
