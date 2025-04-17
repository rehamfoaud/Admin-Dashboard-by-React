import './Dashboard.css'
import data from './data.json'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, CategoryScale, BarElement, Title,Tooltip,Legend } from 'chart.js';
import { faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard(){
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    // بيانات الرسم البياني
    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [65, 59, 80, 81, 56, 55], // يمكنك تعديل هذه البيانات بناءً على data.json
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    // الحالة لتخزين البيانات
    const [emailCount, setEmailCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [newClient, setNewClient] = useState(0);
    const [trafficReceived, setTrafficReceived] = useState(0);

    useEffect(() => {
        setEmailCount(data.emailCount);
        setUserCount(data.userCount);
        setNewClient(data.newClients);
        setTrafficReceived(data.trafficReceived);
    }, [data]);

    return (
        <>
        <div className='container-fluid pe-5'>
            <h1 className='text-light'>Dashboard</h1>
            <p className='text-white'>Welcome to your dashboard</p>
            <div className='dashboard-container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6'>
                        <div className="box d-flex align-items-center justify-content-between px-3 py-2 mx-2 my-4 ">
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                <div className="count text-light my-2">{emailCount}</div>
                                <div className="label text-light">Emails</div>
                            </div>
                            <div>
                                <div className='circle my-2'></div>
                                <div className='text-light'>+14%</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <div className="box d-flex align-items-center justify-content-between px-3 py-2 mx-2 my-4 ">
                            <div>
                                <FontAwesomeIcon icon={faUsers} className="icon" />
                                <div className="count text-light my-2">{userCount}</div>
                                <div className="label text-white">Users</div>
                            </div>
                            <div>
                                <div className='circle my-2' style={{
                                    background: 'conic-gradient(#1c9877 0deg 220deg, #f0f0f0 220deg 360deg)'
                                }}></div>
                                <div className='text-light'>+25%</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <div className="box d-flex align-items-center justify-content-between px-3 py-2 mx-2 my-4 ">
                            <div>
                                <FontAwesomeIcon icon={faUsers} className="icon" />
                                <div className="count text-light my-2">{newClient}</div>
                                <div className="label ">New Clients</div>
                            </div>
                            <div>
                                <div className='circle my-2' style={{
                                    background: 'conic-gradient(#1c9877 0deg 250deg, #f0f0f0 250deg 360deg)'
                                }}></div>
                                <div className='text-light'>+40%</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <div className="box d-flex align-items-center justify-content-between px-3 py-2 mx-2 my-4 ">
                            <div>
                                <FontAwesomeIcon icon={faUsers} className="icon" />
                                <div className="count text-light my-2">{trafficReceived}</div>
                                <div className="label ">Traffic Received</div>
                            </div>
                            <div>
                                <div className='circle my-2' style={{
                                    background: 'conic-gradient(#1c9877 0deg 290deg, #f0f0f0 290deg 360deg)'
                                }}></div>
                                <div className='text-light'>+75%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-3'>
                <h2 className='text-light'>Sales Data</h2>
                <Bar data={chartData} options={options} width={500} height={250}  />
            </div>
        </div>
        </>
    );
}
