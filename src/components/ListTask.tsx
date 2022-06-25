import styles from './ListTask.module.css';

import clipboard from '../assets/clipboard.svg';
import { Task } from './Task';
import { useState } from 'react';

interface Tasks {
  id: number;
  completed: boolean;
  description: string;
}

export function ListTask() {
  const initialTasks: Tasks[] = [
    {
      id: 0,
      completed: false,
      description: 'Finalizar Desafio 01'
    },
    {
      id: 1,
      completed: true,
      description: 'Finalizar aulas no novo módulo de React'
    }
  ];

  const [tasks, setTasks] = useState(initialTasks);

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

      <section className={styles.withoutTask} hidden>
        <img src={clipboard} alt="icone de quando não tem nenhuma tarefa criada" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </section>

      <section>
        {tasks.map(task => {
          return (
            <Task
              key={task.id}
              completed={task.completed}
              description={task.description}
            />
          )
        })}
      </section>
    </div>
  )
}
