import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
import { useEffect, useState } from 'react';
import { getItem } from '../../../core/services/storage/storage';
import Loader from '../../Loader/Loader';


export default function App({date,handleRandom}) {
  console.log(date)
  const [courseDt, setCourseDt] = useState();
  console.log(courseDt)
  const fetchcourse = async () => {
    const token = getItem("token");
    try {
      const result = await fetch(
        `https://skillma-api.shinypi.net/TeacherDashboard/GetTotalIncome?Date=${date}`,
        { headers: { Authorization: "Bearer " + token } }
      );
      const json = await result.json();
      handleRandom(json.data.totalPrice)
      setCourseDt(json.data);
      return json.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchcourse();
  }, [date]);
 
  const labels = courseDt !== undefined && courseDt.coursesIncomes.map((i)=>{
return [i.courseName]
})
const data1= courseDt !== undefined && courseDt.coursesIncomes.map((i)=>{
  return [i.totlaIncome]
})
  var data = {
    labels,
    datasets: [
      {
        fill: true,
        data:data1,
        label: '# of Price',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />
}
