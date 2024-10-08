// src/components/DeepfakeAnalysis.js
import React from 'react';
import { Typography, Paper, Box } from '@material-ui/core';

const DeepfakeAnalysis = ({ result }) => {
  return (
    <Paper style={{ padding: '1rem', marginTop: '1rem' }}>
      <Typography variant="h5" gutterBottom>
        Analysis Result (Mocked)
      </Typography>
      <Box mt={2}>
        <Typography>File Hash: {result.hash}</Typography>
        <Typography>Deepfake Probability: {result.probability.toFixed(2)}%</Typography>
        <Typography>Match Percentage: {result.matchPercentage}%</Typography>
        <Typography>Celebrity Name: {result.celebrityName}</Typography>
        <Typography variant="h6" gutterBottom>
          Twitter Data (Mocked):
        </Typography>
        <Typography>Username: {result.twitterData.username}</Typography>
        <Typography>Follower Count: {result.twitterData.followerCount}</Typography>
        <Typography>Tweet Count: {result.twitterData.tweetCount}</Typography>
        <Typography>Verified: {result.twitterData.verified ? 'Yes' : 'No'}</Typography>
      </Box>
    </Paper>
  );
};

export default DeepfakeAnalysis;
