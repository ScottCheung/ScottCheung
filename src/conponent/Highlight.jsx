import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const RadialChart = () => {
  const getChartOptions = () => {
    return {
      series: [90, 85, 70],
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],
      chart: {
        height: "500px",
        width: "100%",
        type: "radialBar",
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          track: {
            background: "#E5E7EB",
          },
          dataLabels: {
            show: true,
          },
          hollow: {
            margin: 0,
            size: "32%",
          },
        },
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -23,
          bottom: -20,
        },
      },
      labels: ["Done", "In progress", "To do"],
      legend: {
        show: true,
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      tooltip: {
        enabled: true,
        x: {
          show: true,
        },
      },
      yaxis: {
        show: true,
        labels: {
          formatter: function (value) {
            return value + "%";
          },
        },
      },
    };
  };

  useEffect(() => {
    const chartDiv = document.querySelector("#radial-chart");
    if (chartDiv) {
      const chart = new ApexCharts(chartDiv, getChartOptions());
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div
      id="radial-chart"
      className=" bg-white/40 rounded-[28px] shadow-xl large-span-12 p-[30px]"
    >
      {/* Additional Tailwind classes for styling */}
    </div>
  );
};

export default RadialChart;
