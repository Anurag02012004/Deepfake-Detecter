// src/App.js
import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import DeepfakeAnalysis from './components/DeepfakeAnalysis';
import { Container, Typography } from '@material-ui/core';

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFileAnalyzed = (result) => {
    setAnalysisResult(result);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Deepfake Detector
      </Typography>
      <FileUpload onFileAnalyzed={handleFileAnalyzed} />
      {analysisResult && <DeepfakeAnalysis result={analysisResult} />}
    </Container>
  );
}

export default App;
