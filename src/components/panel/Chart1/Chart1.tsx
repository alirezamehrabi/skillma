import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'total download',
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 750 })),
        data: ['100', '70', '100', '537', '140', '150', '180', '100', '200', '140', '150', '180'],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: '#FF9401',
      },
    ],
  };
  
  export default function App() {
    return <Bar options={options} data={data} />;
  }
