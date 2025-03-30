import React, { useState } from 'react';

interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTitle: string) => void;
  onToggleComplete: (id: string, newStatus: boolean) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDelete,
  onUpdate,
  onToggleComplete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  // Handle updating the task title
  const handleUpdate = () => {
    if (editedTitle.trim() !== '' && editedTitle.trim() !== task.title) {
      onUpdate(task._id, editedTitle);
    }
    setIsEditing(false);
  };

  // Handle toggling completion status
  const handleToggle = () => {
    onToggleComplete(task._id, !task.completed);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        {/* Checkbox to toggle completion */}
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={task.completed}
          onChange={handleToggle}
        />
        {isEditing ? (
          <input
            type="text"
            className="form-control me-2"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.title}
          </span>
        )}
      </div>
      <div>
        {isEditing ? (
          <button
            className="btn btn-success btn-sm me-2"
            onClick={handleUpdate}
          >
            Save
          </button>
        ) : (
          <button
            className="btn btn-secondary btn-sm me-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
