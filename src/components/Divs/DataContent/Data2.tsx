import React from "react";
import { PlansBox } from "../../Box/styles";
import ReactApexChart from "react-apexcharts";

const Data2: React.FC = () => {
  const options = {
    chart: {
      height: 350,
      zoom: {
        enabled: true,
      },
    },
    title: {
      text: "Gráfico 1",
      style: {
        fontSize: "15px",
      },
    },
  };

  const series = [
    {
      name: "All Tasks",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "My Tasks",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  return (
    <PlansBox>
      <ReactApexChart
        type="line"
        options={options}
        series={series}
        height="100%"
      />
    </PlansBox>
  );
};

export default Data2;
