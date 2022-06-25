import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.taskContent}>
      <input type="radio" name="" id="" />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button title='Deletar task'>
        <Trash size={20} />
      </button>
    </div>
  )
}
