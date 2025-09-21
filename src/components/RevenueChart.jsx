
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const SalesAnalyticsChart = ({ chartData }) => {
  const CustomChartTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const total = chartData.reduce((sum, dataPoint) => sum + dataPoint.value, 0);
      const percent = total ? ((value / total) * 100).toFixed(1) : 0;
      return (
        <div className="bg-black text-white text-[12px] font-semibold rounded-[6px] px-[10px] py-[4px] shadow-md">
          {percent}%
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-[20px] w-full bg-global-6 rounded-[16px] p-[24px]">
      <span className="text-[14px] font-inter font-semibold text-global-1">
        Total Sales
      </span>

      <div className="flex justify-center items-center">
        <div className="w-[140px] h-[140px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={65}
                paddingAngle={5}
                cornerRadius={6}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {chartData.map((dataEntry, index) => (
                  <Cell key={`cell-${index}`} fill={dataEntry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip content={<CustomChartTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex flex-col gap-[12px] w-full">
        {chartData.map((dataItem, index) => (
          <div key={index} className="flex justify-between items-center w-full">
            <div className="flex items-center gap-[6px]">
              <span
                className="inline-block w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: dataItem.color }}
              />
              <span className="text-[13px] text-global-1 font-inter">{dataItem.name}</span>
            </div>
            <span className="text-[13px] text-global-1 font-inter">${dataItem.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SalesAnalyticsChart;
