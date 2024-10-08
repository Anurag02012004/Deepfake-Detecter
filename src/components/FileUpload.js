// src/components/FileUpload.js
import React, { useState } from 'react';
import { Button, TextField, Typography, CircularProgress, Box } from '@material-ui/core';
import { analyzeFile } from '../services/deepfakeService';

const FileUpload = ({ onFileAnalyzed }) => {
  const [file, setFile] = useState(null);
  const [celebrityName, setCelebrityName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError(null);
  };

  const handleCelebrityNameChange = (event) => {
    setCelebrityName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file || !celebrityName) {
      setError("Please select a file and enter a celebrity name");
      return;
    }

    setLoading(true);
    try {
      const result = await analyzeFile(file, celebrityName);
      onFileAnalyzed(result);
    } catch (error) {
      console.error('Error analyzing file:', error);
      setError(`An error occurred: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mt={2}>
      <input 
        type="file" 
        onChange={handleFileChange} 
        accept="image/*,video/*,audio/*"
      />
      <TextField
        label="Celebrity Twitter Username"
        value={celebrityName}
        onChange={handleCelebrityNameChange}
        fullWidth
        margin="normal"
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        disabled={loading}
        fullWidth
      >
        {loading ? <CircularProgress size={24} /> : "Analyze File"}
      </Button>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default FileUpload;
