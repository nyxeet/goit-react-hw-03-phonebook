import React from 'react';
import './ContactsList.css';

const TaskList = ({ tasks, onRemove }) => (
  <ul className="TaskList">
    {tasks.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => onRemove(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TaskList;
