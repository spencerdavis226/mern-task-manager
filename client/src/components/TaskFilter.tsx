import React from 'react';

interface TaskFilterProps {
  currentFilter: 'all' | 'active' | 'completed';
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  return (
    <div className="btn-group mb-3">
      <button
        type="button"
        className={`btn btn-outline-primary ${
          currentFilter === 'all' ? 'active' : ''
        }`}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        type="button"
        className={`btn btn-outline-primary ${
          currentFilter === 'active' ? 'active' : ''
        }`}
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button
        type="button"
        className={`btn btn-outline-primary ${
          currentFilter === 'completed' ? 'active' : ''
        }`}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
