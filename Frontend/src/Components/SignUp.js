import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../utils/api';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    full_name: '',
    role: 'customer', // Default to 'customer'
    location: '',
    preferences: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    try {
      // Attempt registration
      await registerUser(formData); // Connects with the backend
      alert('Registration successful!');
      
      // Clear form fields after successful registration
      setFormData({
        email: '',
        password: '',
        full_name: '',
        role: 'customer',
        location: '',
        preferences: '',
      });

      // Redirect to Sign In page after successful registration
      navigate('/signin');
    } catch (error) {
      console.error('Registration Error:', error);
      alert(error.detail || 'Registration failed.');
    }
  };

  return (
    <Container 
      maxWidth="lg" 
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(90deg, rgba(36,198,255,1) 0%, rgba(69,114,248,1) 100%)' }}
    >
      <div style={{ width: '100%', maxWidth: '500px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#ffffff' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <MenuItem value="customer">Customer</MenuItem>
                  <MenuItem value="service_provider">Service Provider</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location (Optional)"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Preferences (Optional)"
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
