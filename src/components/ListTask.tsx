import styles from './ListTask.module.css';

import clipboard from '../assets/clipboard.svg';
import { Task } from './Task';
import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';

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
  const [completedTask, setCompletedTasks] = useState(tasks.filter(task => task.completed).length)

  function handleNewTask() {
    event?.preventDefault();
  }

  function completeTask(taskId: number) {
    const updatedCompleteList = tasks.filter(task => {
      if(task.id === taskId) {
        task.completed = true;
      }

      return task;
    });
    const updatedCompletedList = updatedCompleteList.filter(task => task.completed).length;

    setTasks(updatedCompleteList);
    setCompletedTasks(updatedCompletedList);
  }

  function deleteTask(taskId: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => { return task.id !== taskId});
    const updatedCompletedList = tasksWithoutDeletedOne.filter(task => task.completed).length;

    setTasks(tasksWithoutDeletedOne);
    setCompletedTasks(updatedCompletedList);
  }

  return (
    <div>
        <form onSubmit={handleNewTask} className={styles.containerNewTask}>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button type='submit'>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      
      <div className={styles.container}>
        <header>
          <p>
            Tarefas criadas
            <span>{tasks.length}</span> 
          </p>

          <p>
            Concluídas
            <span>{completedTask} de {tasks.length}</span>
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
                id={task.id}
                completed={task.completed}
                description={task.description}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            )
          })}
        </section>
      </div>
    </div>
  )
}
