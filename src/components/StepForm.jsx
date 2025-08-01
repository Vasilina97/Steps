import { useState } from 'react';

const StepForm = ({ onAdd }) => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !distance) return;
    
    onAdd({ date, distance: parseFloat(distance) });
    setDate('');
    setDistance('');
  };

  return (
    <form onSubmit={handleSubmit} className="step-form">
      <div className="form-group">
        <label htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="ДД.ММ.ГГГГ"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="distance">Пройдено км</label>
        <input
          type="number"
          id="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          step="0.1"
          min="0"
          required
        />
      </div>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default StepForm;