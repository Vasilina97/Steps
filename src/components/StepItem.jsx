const StepItem = ({ step, onRemove }) => {
  return (
    <div className="step-item">
      <span>{step.date}</span>
      <span>{step.distance.toFixed(1)}</span>
      <button onClick={() => onRemove(step.date)}>✕</button>
    </div>
  );
};

export default StepItem;