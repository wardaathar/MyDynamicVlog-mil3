"use client"
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  return (
    <Box 
      sx={{
        maxWidth: '500px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          sx={{ marginBottom: '15px' }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          sx={{ marginBottom: '15px' }}
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          variant="outlined"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          sx={{ marginBottom: '15px' }}
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
          sx={{ padding: '10px 0', fontSize: '16px' }}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ContactMe;
