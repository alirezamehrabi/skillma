import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getItem } from '../../../core/services/storage/storage';
import Loader from '../../Loader/Loader';

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

export default function App({date,courseid}) {
  // console.log(date)
  const [courseDt, setCourseDt] = useState();
  // console.log(courseDt)
  const fetchcourse = async () => {
    const token = getItem("token");
    try {
      const result = await fetch(
        `https://skillma-api.shinypi.net/TeacherDashboard/GetTotalStudentTeacherReport?CourseId=${courseid}&Date=${date}`,
        { headers: { Authorization: "Bearer " + token } }
      );
      const json = await result.json();
      // console.log(json.data.pageData)
      setCourseDt(json.data);
      return json.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchcourse();
  }, [date,courseid]);
 
  const labels = courseDt !== undefined && courseDt.map((i)=>{
return [i.monthName]
})
const data1= courseDt !== undefined && courseDt.map((i)=>{
  return [i.studentCount]
})
  var data = {
    labels,
    datasets: [
      {
        fill: true,
        data:data1,
        label: 'Total student',
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: '#FF9401',
      },
    ],
  };
  return courseDt !== undefined && <Bar options={options} data={data} />;
}
