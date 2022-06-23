import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';

const Book = () => {
    const {bedType} = useParams();
    const [value, setValue] = React.useState([null, null]);
    return (
        
            <div>
                <h4 className='text-center mt-5 mb-5 fw-bold'>Book this {bedType} room</h4>
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
            </div>
       
    );
};

export default Book;