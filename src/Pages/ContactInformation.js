import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import '../Pages/team/MangeTeam.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 100, renderCell: (params) => (<span style={{ color: '#1c9877', fontWeight: 'bold' }}>{params.value}</span>) },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 100, renderCell: (params) => (<span style={{ color: '#1c9877', fontWeight: 'bold' }}>{params.value}</span>) },
  { field: 'phoneNumber', headerName: 'Phone Number', width: 180 },
  { field: 'address', headerName: 'Address', width: 250 },
  { field: 'city', headerName: 'City', width: 150 },
  { field: 'zip', headerName: 'ZIP Code', width: 130 },
  { field: 'email', headerName: 'Email', width: 250, valueGetter: (value, row) => `${row.firstName}@example.com` }
];

const rows = [
  { id: 1, firstName: 'Jon', lastName: 'Snow', age: 35, phoneNumber: '+20 1023456789', address: '123 North St', city: 'Winterfell', zip: '12345' },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42, phoneNumber: '+20 1025661702', address: '456 King’s Rd', city: 'Casterly Rock', zip: '67890' },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 45, phoneNumber: '+20 1023456789', address: '789 Royal Ave', city: 'Casterly Rock', zip: '11223' },
  { id: 4, firstName: 'Arya', lastName: 'Stark', age: 16, phoneNumber: '+20 1023456789', address: '101 Needle Ln', city: 'Winterfell', zip: '33445' },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: null, phoneNumber: '+20 1023456789', address: '202 Dragonstone', city: 'Dragonstone', zip: '55667' },
  { id: 6, firstName: 'Melisandre', lastName: 'Jaime', age: 50, phoneNumber: '+20 1023456789', address: '303 Fire St', city: 'Asshai', zip: '77889' },
  { id: 7, firstName: 'Ferrara', lastName: 'Clifford', age: 44, phoneNumber: '+20 1023456789', address: '404 Shadow Rd', city: 'Braavos', zip: '99001' },
  { id: 8, firstName: 'Rossini', lastName: 'Frances', age: 36, phoneNumber: '+20 1023456789', address: '505 Wind Ave', city: 'Pentos', zip: '22033' },
  { id: 9, firstName: 'Harvey', lastName: 'Roxie', age: 65, phoneNumber: '+20 1023456789', address: '606 Sea St', city: 'Meereen', zip: '44556' }
];

const paginationModel = { page: 0, pageSize: 9 };

export default function DataContact() {
  return (
    <>
      <h1 className="text-light mt-3 ms-3">CONTACTS</h1>
      <p className="ms-3" style={{ color: '#1c9877' }}>List Of Contacts For Future References</p>
      <Paper sx={{ height: 650, width: '98%' }} className="mt-5">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            border: 0,
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
