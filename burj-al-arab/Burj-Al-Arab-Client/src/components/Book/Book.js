import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { UserContext } from '../../App';

const Book = () => {
    const {bedType} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [value, setValue] = React.useState([null, null]);
    const handleBooking = () =>{
        const checkIn = value[0].toLocaleDateString('en-GB');
        const checkOut = value[1].toLocaleDateString('en-GB');
        const newDateFormate = {checkIn,checkOut};
        console.log(newDateFormate);
        const {name, email} = loggedInUser;
        const booking = {name,email,...newDateFormate};
        console.log(booking);
        postBooking(booking)
    }

    const postBooking = (booking) =>{
        fetch('http://localhost:5000/addBooking', {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
    return (
        
            <div className=''>
                <h4 className='text-center mt-5 mb-5 fw-bold'>Book this {bedType} room</h4>
                <div className='d-flex justify-content-center mb-5'>
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    localeText={{ start: 'Check-in', end: 'Check-out' }}
                    >
                    <DateRangePicker
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps} />
                        </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
                <Button className="mt-5" variant="contained" onClick={handleBooking}>Book Now</Button>
                </div>
            </div>
       
    );
};

export default Book;