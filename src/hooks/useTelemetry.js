'use client';

import { useState, useEffect, useCallback } from 'react';

const STEPS = [
  { id: 1, title: 'APRILTAG_CALIBRATION', desc: 'Spatial matrix lock onto experimental tray.' },
  { id: 2, title: 'TOOL_IDENTIFICATION', desc: 'Identify pipettes and fluid containers.' },
  { id: 3, title: 'SAMPLE_EXTRACT', desc: 'Fluid extraction from bio-vial A.' },
  { id: 4, title: 'ACTIVATE_EQUIPMENT', desc: 'Spin centrifuge sequence for 60s.' },
  { id: 5, title: 'INSERT_SAMPLE', desc: 'Secure payload in spectrometer compartment.' },
  { id: 6, title: 'PIPELINE_COMPLETE', desc: 'Data hashed and synced with payload node.' }
];

// Helper mock SHA-256 string generator
const generateMockHash = () => {
  return Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('') + '...';
};

export function useTelemetry() {
  const [currentStep, setCurrentStep] = useState(1);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [logs, setLogs] = useState([]);
  const [fps, setFps] = useState(60);
  const [gpuLoad, setGpuLoad] = useState(42);
  const [inferenceTime, setInferenceTime] = useState(8.4);

  // Trigger error condition
  const triggerError = useCallback(() => {
    setHasError(true);
    setErrorMessage({
      code: 'ERR_SEQ_DEVIATION',
      expected: STEPS[(currentStep - 1) % STEPS.length].title,
      detected: 'UNAUTHORIZED_HAND_MOVEMENT_DETECTED',
      timestamp: new Date().toISOString().split('T')[1].slice(0, 8)
    });
  }, [currentStep]);

  // Clear/Acknowledge error state
  const clearError = useCallback(() => {
    setHasError(false);
    setErrorMessage(null);
  }, []);

  // Advance state
  const nextStep = useCallback(() => {
    setCurrentStep((prev) => (prev % STEPS.length) + 1);
  }, []);

  // 10Hz Log Telemetry Stream Generator
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toISOString();
      const newLog = {
        timestamp: now.split('T')[1].slice(0, 11),
        step: currentStep,
        prevHash: generateMockHash(),
        hash: generateMockHash(),
        status: hasError ? 'HAZARD' : 'NOMINAL',
        action: hasError ? 'ACTION_DEVIATION_DETECTED' : `EXEC_STEP_${currentStep}`
      };

      setLogs((prevLogs) => [newLog, ...prevLogs.slice(0, 49)]);

      // Random jitter for Jetson stats
      setFps(Math.floor(58 + Math.random() * 4));
      setGpuLoad(Math.floor(65 + Math.random() * 15));
      setInferenceTime((7.2 + Math.random() * 2.5).toFixed(1));
    }, 100);

    return () => clearInterval(interval);
  }, [currentStep, hasError]);

  return {
    steps: STEPS,
    currentStep,
    hasError,
    errorMessage,
    logs,
    fps,
    gpuLoad,
    inferenceTime,
    triggerError,
    clearError,
    nextStep
  };
}