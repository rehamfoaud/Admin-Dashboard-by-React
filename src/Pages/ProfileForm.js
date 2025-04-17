import React from 'react';
import { TextField, Button, Stack, Typography, Container, Box } from '@mui/material';

const ProfileForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <>
    <h1 className="text-light ms-3 mt-3 ">CREATE A USER</h1>
    <p style={{color:'#1c9877'}} className="ms-3 mt-1">Create a new user profile</p>
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            padding: 4,
        }}
    >
    <Box sx={{ width: '100%', padding: 4, borderRadius: 2 }}>
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <Stack direction="row" spacing={2}>
                <TextField
                    label="First Name"
                    name="firstName"
                    fullWidth
                    required
                    sx={{
                    '& .MuiInputBase-root': {
                        color: 'black',
                        border: '1px solid #1c9877'
                    },
                    '& .MuiFormLabel-root': {
                        color: 'white'
                    }
                    }}
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    required
                    sx={{
                    '& .MuiInputBase-root': {
                        color: 'black',
                         border: '1px solid #1c9877'
                    },
                    '& .MuiFormLabel-root': {
                        color: 'white'
                    }
                    }}
                />
                </Stack>

                {/* باقي الفورم كل واحد في صف */}
                <TextField
                label="Age"
                name="age"
                type="number"
                fullWidth
                required
                sx={{
                    '& .MuiInputBase-root': {
                    color: 'black',
                     border: '1px solid #1c9877',
                      margin:'10px 0'
                    },
                    '& .MuiFormLabel-root': {
                    color: 'white'
                    }
                }}
                />
                <TextField
                label="Phone Number"
                name="phone"
                fullWidth
                required
                sx={{
                    '& .MuiInputBase-root': {
                    color: 'black',
                     border: '1px solid #1c9877',
                      margin:'10px 0'
                    },
                    '& .MuiFormLabel-root': {
                    color: 'white'
                    }
                }}
                />
                <TextField
                label="Address"
                name="address"
                fullWidth
                multiline
                rows={2}
                required
                sx={{
                    '& .MuiInputBase-root': {
                    color: 'black',
                     border: '1px solid #1c9877',
                     margin:'10px 0'
                    },
                    '& .MuiFormLabel-root': {
                    color: 'white'
                    }
                }}
                />
                <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                    backgroundColor: '#1c9877',padding:'10px',
                    '&:hover': { backgroundColor: '#118888' }
                }}
                >
                Submit
                </Button>
            </Stack>
            </form>
        </Box>
</Box>



    </>
  );
};


export default ProfileForm;
