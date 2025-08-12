import StepItem from './StepItem';

const StepsList = ({ steps, onRemove }) => {
  return (
    <div className="steps-list">
      <div className="list-header">
        <span>Дата (ДД.ММ.ГГГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>
      {steps.length === 0 ? (
        <p className="empty-message">Нет данных о шагах</p>
      ) : (
        steps.map((step) => (
          <StepItem key={step.date} step={step} onRemove={onRemove} />
        ))
      )}
    </div>
  );
};

export default StepsList;