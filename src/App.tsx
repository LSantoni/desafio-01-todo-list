import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import styles from './App.module.css';

import './global.css'
import { ListTask } from './components/ListTask';

export function App() {

  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
        <NewTask />

        <ListTask />
      </div>
    </div>
  )
}
