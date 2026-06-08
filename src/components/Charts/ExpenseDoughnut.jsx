import { Doughnut } from 'react-chartjs-2';
export const ExpenseDoughnut = ({ chartData }) => (
  <div className="flex justify-center items-center h-[300px] w-full">
    <Doughnut data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
  </div>
);