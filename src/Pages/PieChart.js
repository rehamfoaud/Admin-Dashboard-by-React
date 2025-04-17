import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartPage = () => {
  const data = {
    labels: ['Sales', 'Expenses', 'Profit'],
    datasets: [
      {
        data: [300, 200, 100],
        backgroundColor: ['#1c9877', '#e74c3c', '#1c2844'],
        borderColor: '#1a2438',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <>
      <h1 className='text-light mt-3 ms-3'>PIE CHART</h1>
      <p className='mt-3 ms-3 fs-5' style={{ color: '#1c9877' }}>Monthly Sales Overview</p>
      <div style={{
        padding: '20px',
        borderRadius: '10px',
        width: '100%',
        maxWidth: '50%',
        margin: 'auto',
        height: '650px'
      }}>
        <Pie data={data} options={options} />
      </div>
    </>
  );
};

export default PieChartPage;
