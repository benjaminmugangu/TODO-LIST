// ce composant sera utilisee pour afficher la liste des taches

import styles from './tasklist.module.css';
import TaskItems from '../taskItems/Taskitems';

const TaskList = () => {
    return (
        <div className="box">
            <h2 className={styles.title}> 📝 Il te reste encore x tâches</h2>
            <ul className={styles.container}>
                <TaskItems />
                <TaskItems />
                <TaskItems />
                <TaskItems />
            </ul>
        </div>
    );
}

export default TaskList; 