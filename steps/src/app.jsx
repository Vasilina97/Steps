import { useState } from 'react';
import StepForm from './components/StepForm';
import StepsList from './components/StepsList';
import './styles.css';

function App() {
  const [steps, setSteps] = useState([]);

  const handleAdd = (newStep) => {
    setSteps((prevSteps) => {
      const existingStepIndex = prevSteps.findIndex(
        (step) => step.date === newStep.date
      );
      
      if (existingStepIndex >= 0) {
        const updatedSteps = [...prevSteps];
        updatedSteps[existingStepIndex].distance += newStep.distance;
        return updatedSteps;
      }
      
      return [...prevSteps, newStep].sort((a, b) => 
        new Date(b.date.split('.').reverse().join('-')) - 
        new Date(a.date.split('.').reverse().join('-'))
      );
    });
  };

  const handleRemove = (date) => {
    setSteps((prevSteps) => prevSteps.filter((step) => step.date !== date));
  };

  return (
    <div className="app">
      <h1>Учет тренировок</h1>
      <StepForm onAdd={handleAdd} />
      <StepsList steps={steps} onRemove={handleRemove} />
    </div>
  );
}

export default App;