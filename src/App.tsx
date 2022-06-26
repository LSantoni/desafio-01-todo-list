import { Header } from './components/Header'

import styles from './App.module.css';

import './global.css'
import { ListTask } from './components/ListTask';

export function App() {

  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
        <ListTask />
      </div>
    </div>
  )
}
