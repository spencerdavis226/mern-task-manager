import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTitle: string) => void;
  onToggleComplete: (id: string, newStatus: boolean) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDelete,
  onUpdate,
  onToggleComplete,
}) => {
  return (
    <ul className="list-group">
      {tasks.length === 0 ? (
        <li className="list-group-item">No tasks added yet.</li>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;
