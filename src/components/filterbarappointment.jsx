// Import necessary components from MUI
import React, { useState } from 'react';
import { Box, TextField, MenuItem, Button, InputLabel, FormControl, Select } from '@mui/material';

export default function AppointmentFilterBar() {
    const [selectedDisease, setSelectedDisease] = useState('');
    const [sortBy, setSortBy] = useState('');

    const diseases = ['Cardiology', 'Dermatology', 'Neurology', 'Orthopedics', 'Pediatrics'];
    const sortOptions = ['Experience', 'Qualification', 'Specialization'];

    const handleDiseaseChange = (event) => {
        setSelectedDisease(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <Box 
            sx={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '16px', 
                backgroundColor: '#f5f5f5', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
        >
            {/* Disease Selection Dropdown */}
            <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="disease-select-label">Select Disease</InputLabel>
                <Select
                    labelId="disease-select-label"
                    id="disease-select"
                    value={selectedDisease}
                    label="Select Disease"
                    onChange={handleDiseaseChange}
                >
                    {diseases.map((disease) => (
                        <MenuItem key={disease} value={disease}>
                            {disease}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Sorting Options Dropdown */}
            <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="sort-select-label">Sort By</InputLabel>
                <Select
                    labelId="sort-select-label"
                    id="sort-select"
                    value={sortBy}
                    label="Sort By"
                    onChange={handleSortChange}
                >
                    {sortOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Search Button */}
            <Button variant="contained" color="primary">
                Search
            </Button>
        </Box>
    );
}
