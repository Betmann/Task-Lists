import { useState } from "react";
import { Task } from "./components/Task";
import { useRef } from "react";

import styles from './App.module.css';

export function App() {
  const inputRef = useRef(null)
  const [tasks, setTasks] = useState([])

  function handleAddTask() {
    const newTask = {
      id: tasks.length + 1,
      title: inputRef.current.value,
      isCompleted: true
    }

    setTasks([...tasks, newTask])

    inputRef.current.value = ''
  }
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Dancer's</h1>

      <div className={styles.inputGroup}>
        <input className={styles.input} placeholder="Digite a sua dança...." ref={inputRef} type="text" />
        <button className={styles.button} onClick={handleAddTask}>Add</button>
      </div>
      
      <div className={styles.tasks}>
        {tasks.length > 0 && tasks.map(item => (
         <Task key={item.id} task={item} />
        ))}

        {!tasks.length && <p>Nenhuma tarefa ainda...😒</p>}
        
      </div>
    </main>
  );
}
