// ce composant sera utilise pour afficher les elements de la liste des taches
import { Trash2 } from "lucide-react";
import styles from './taskitems.module.css';

const TaskItems = ({ task, editTask, deleteTask }) => {
    return (
        <li className={`${styles.container} ${task?.completed ? styles.success : styles.default}`}//si la tâche est terminée, on applique le style de succès, sinon le style par défaut 
        onClick={() => editTask(task.id, !task.completed)}>
            <div className={styles.item}>
                <div className={`${styles.id} ${task?.completed ? styles.idSuccess : styles.idDefault}`}>
                    {task.id}
                </div>
                <div className={`${task?.completed ? styles.contentSuccess : styles.contentDefault} ${styles.marge}`}>
                    {task.title}
                </div>
            </div>
            <button className="button-primary" onClick={(e) => {
                e.stopPropagation(); 
                deleteTask(task.id);
                }}><Trash2 size={20} color="#2870ff" /></button>
        </li>
    );
};

export default TaskItems;


