import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import './MangeTeam.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
    renderCell: (params) => (
      <span style={{ color: '#1c9877', fontWeight: 'bold' }}>
        {params.value}
      </span>
    ),
  },
  { field: 'phoneNumber', headerName: 'Phone Number', type: 'number', width: 220 },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    valueGetter: (value, row) => `${row.firstName} @example.com`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, phoneNumber: '+20 1023456789' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, phoneNumber: '+20 1025661702' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, phoneNumber: '+20 1023456789' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, phoneNumber: '+20 1023456789' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 44, phoneNumber: '+20 1023456789' },
  { id: 6, lastName: 'Melisandre', firstName: 'Jaime', age: 50, phoneNumber: '+20 1023456789' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, phoneNumber: '+20 1023456789' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, phoneNumber: '+20 1023456789' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, phoneNumber: '+20 1023456789' },
];

const paginationModel = { page: 0, pageSize: 9 };

export default function DataTable() {
  return (
    <>
      <h1 className=' text-light mt-3 ms-3'>Team</h1>
      <p className=' ms-3' style={{ color: '#1c9877' }}>Managing Team Member</p>
      <Paper sx={{
        height: { xs: 450, sm: 700 },  // responsive height for mobile and larger screens
        width: '97%', 
        margin: 'auto',
        padding: { xs: 2, sm: 5 },
        backgroundColor: 'transparent',  // إزالة الخلفية البيضاء
      }} className='mt-5'>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[9, 10]}
          checkboxSelection
          sx={{
            border: 0,
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#1a2438',
              color: 'white',
            },
            '& .MuiDataGrid-cell': {
              backgroundColor: '#1a2438',
              color: 'white',
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: '#1c9877',
              color: 'white',
            },
            '& .MuiDataGrid-root': {
              backgroundColor: 'transparent', // إزالة الخلفية البيضاء
            },
          }}
        />
      </Paper>
    </>
  );
}
