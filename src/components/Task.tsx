import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  id: number;
  completed: boolean;
  description: string;
  completeTask: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

export function Task({ id, completed, description, completeTask, deleteTask }: TaskProps) {
  function handleCompleteTask() {
    completeTask(id);
  }

  function handleDeleteTask() {
    deleteTask(id);
  } 

  return (
    <div className={styles.taskContent}>
      <input onClick={handleCompleteTask} type="radio" checked={completed} />
      <p className={completed ? styles.completedTask : ""}>{description}</p>
      <button onClick={handleDeleteTask} title='Deletar task'>
        <Trash size={20} />
      </button>
    </div>
  )
}
