import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  completed: boolean;
  description: string;
}

export function Task({ completed, description }: TaskProps) {
  
  return (
    <div className={styles.taskContent}>
      <input type="radio" checked={completed} />
      <p className={completed ? styles.completedTask : ""}>{description}</p>
      <button title='Deletar task'>
        <Trash size={20} />
      </button>
    </div>
  )
}
