import './App.css';

import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import Close from './img/close.png';
import Lock from './img/security.png';
import PanCard from './img/pancard.jpg';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsButtonEnabled(value.length === 10);
  };

  const handleVerifyClick = () => {
    // Add your verification logic here
    alert('Verify button clicked!');
  };

  return (
    <>
      <div className='home-container'>
        <div className='pancard-wrapper'>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <Paper>
                  {/* <Grid item xs={2}>
                    <img className='lock-img' alt="Lock Image" src={Lock} />
                  </Grid> */}
                  <Grid item xs={12}>
                    <img className='lock-img' alt="Lock Image" src={Lock} />
                    <Typography className='heading' variant="h4">PAN Verification</Typography>
                    <Typography className='sub-heading' variant="h6">As per regulations, it is mandatory to verify your PAN details.</Typography>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <img className='close-img' alt="Close Image" src={Close} />
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={12}>
                <img className='pan-card-img' alt="User Image" src={PanCard} />
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={12}>
                <TextField
                  label="Enter 10 digit PAN"
                  variant="outlined"
                  value={inputValue}
                  onChange={handleInputChange}
                  fullWidth
                  multiline
                  inputProps={{
                    maxLength: 10, // Max length of 10 characters
                  }}
                />
                <p className='numbers-value'>{inputValue.length}/10</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleVerifyClick}
                  disabled={!isButtonEnabled}
                  className='verify-btn'
                >
                  Verify
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
