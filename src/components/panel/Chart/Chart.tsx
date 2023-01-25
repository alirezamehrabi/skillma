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
  
  export default function App(props) {
console.log(props.data)
const labels = props.data.map((i)=>{
  return [i.courseName]
})
  const data1= props.data.map((i)=>{
    return [i.studentCount]
  })
    var data = {
      labels,
      datasets: [
        {
          fill: true,
          label: 'Online Course',
          data:data1,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
    return <Line options={options} data={data} />;
  }
  