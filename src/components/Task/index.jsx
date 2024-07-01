import styles from './styles.module.css';


export function Task(props) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{props.task.id}. {props.task.title}</p>
      {!props.task.isCompleted && (
        <button className={styles.button}>OK</button>
      )}
    </div>
  )
}