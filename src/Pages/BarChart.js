import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChartPage = () => {
    const data = {
        labels: [
         'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
          {
            label: 'Sales',
            data: [220, 170, 210, 240, 190, 230, 260, 300, 280],
            backgroundColor: '#1c9877',
            borderRadius: 4,
            barThickness: 20,
          },
          {
            label: 'Expenses',
            data: [ 180, 110, 160, 190, 150, 170, 190, 220, 200],
            backgroundColor: '#e74c3c',
            borderRadius: 4,
            barThickness: 20,
          },
          {
            label: 'Profit',
            data: [ 40, 60, 50, 50, 40, 60, 70, 80, 80],
            backgroundColor: '#1c2844',
            borderRadius: 4,
            barThickness: 20,
          },
        ],
      };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff',
        },
        grid: {
          color: '#444',
        },
      },
      y: {
        ticks: {
          color: '#fff',
        },
        grid: {
          color: '#444',
        },
      },
    },
  };

  return (
    <>
    <h1 className='text-light mt-3 ms-3'> BAR CHART</h1>
    <p className=' mt-3 ms-3 fs-5' style={{color:'#1c9877'}}>Monthly Sales Overview</p>
    
    <div style={{ padding: '30px', borderRadius: '10px' }}>
      <Bar data={data} options={options} />
    </div>
    </>
  );
};

export default BarChartPage;
