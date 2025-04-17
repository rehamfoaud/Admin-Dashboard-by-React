import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import './MangeTeam.css'

const columns = [
    { field: 'id', headerName: 'ID', width: 100},
    { field: 'Name', headerName: 'Name', width: 150,
        renderCell:(params) =>(
            <span style={{ color: '#1c9877', fontWeight: 'bold' }}>
            {params.value}
          </span>
        )
     },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 180 },
    { field: 'Cost', headerName: 'Cost', width: 150,
        renderCell: (params) => (
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {params.value}
            </span>
          )
     },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      valueGetter: (value, row) => `${row.Name}@example.com`
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
    }
  ];
  
  const rows = [
    {
      id: 1, Name: 'Jon Snow', age: 35, phoneNumber: '+20 1023456789',
      Cost:'300$', date: '2025-04-16'
    },
    {
      id: 2, Name: 'Cersei Lannister',age: 42, phoneNumber: '+20 1025661702',
      Cost:'500$', date: '2025-04-16'
    },
    {
      id: 3, Name: 'Jaime Lannister', phoneNumber: '+20 1023456789',
      Cost:'800$', date: '2025-04-16'
    },
    {
      id: 4, Name: 'Arya Stark',  phoneNumber: '+20 1023456789',
      Cost:'360$', date: '2025-04-16'
    },
    {
      id: 5, Name: 'Daenerys Targaryen', phoneNumber: '+20 1023456789',
      Cost:'450$', date: '2025-04-16'
    },
    {
      id: 6, Name: 'Melisandre Jaime',  phoneNumber: '+20 1023456789',
      Cost:'390$', date: '2025-04-16'
    },
    {
      id: 7,Name: 'Ferrara Clifford', phoneNumber: '+20 1023456789',
      Cost:'280$', date: '2025-04-16'
    },
    {
      id: 8, Name: 'Rossini Frances', phoneNumber: '+20 1023456789',
      Cost:'800$', date: '2025-04-16'
    },
    {
      id: 9, Name: 'Harvey Roxie',  phoneNumber: '+20 1023456789',
      Cost:'390$', date: '2025-04-16'
    }
  ];
  

const paginationModel = { page: 0, pageSize: 9 };

export default function DataBalance() {
  return (
    <>
      <h1 className='text-light mt-3 ms-3'>INVOICES</h1>
      <p className='ms-3' style={{ color: '#1c9877' }}>List Of Invoice Balance</p>
      <Paper sx={{ height: 650, width: '90%' }} className='mt-5'>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 ,
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: '#1c9877',
              color: 'white',
            },
            '@media (max-width: 768px)': {
              fontSize: '12px',
            },
            '@media (max-width: 480px)': {
              fontSize: '10px',
            },
          }}
        />
      </Paper>
    </>
  );
}
