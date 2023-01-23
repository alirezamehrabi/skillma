import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Total Student',
      },
    },
  };
  
  const labels = ['Course1', 'Course2', 'Course3', 'Course4', 'Course5', 'Course6', 'Course7'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Online Course',
        data: ['100', '70', '100', '200', '140', '150', '180'],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  export default function App() {
    return <Line options={options} data={data} />;
  }
  