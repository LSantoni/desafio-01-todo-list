import styles from './ListTask.module.css';

import clipboard from '../assets/clipboard.svg';

export function ListTask() {
  return (
    <div className={styles.container}>
      <header>
        <p>
          Tarefas criadas
          <span>0</span> 
        </p>

        <p>
          Concluídas
          <span>0</span>
        </p>
      </header>

      <section>
        <img src={clipboard} alt="icone de quando não tem nenhuma tarefa criada" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </section>
    </div>
  )
}
