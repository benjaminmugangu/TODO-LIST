// // ce composant sera utilisee pour afficher la liste des taches

// import styles from './tasklist.module.css';
// import {TaskItems} from '../taskItems/TaskItems';


// export const TaskList = ({
//     // props: tasks, editTask, deleteTask, completedTasks, incompleteTasks
//     tasksList,
//     editTask,
//     deleteTask,
//     completedTasks,
//     incompletedTasks,
// }) => {

//     const taskList = tasksList.map((task) => (
//         <TaskItems key={task.id} />
//     ));

//     return (
//         <div className="box">
//             <h2 className={styles.title}> 📝 Il te reste encore {incompletedTasks} tâches

//             </h2>
//                 {taskList && taskList.length > 0 && (
//                     <ul className={styles.container}>
//                         {tasksList}
//                     </ul>

//                 )}
//         </div>
//     );
// };

// export default TaskList; 



import styles from './tasklist.module.css';
import TaskItems from '../taskItems/TaskItems';

export const TaskList = ({
    tasksList,
    editTask,
    deleteTask,
    completedTasks,
    incompletedTasks,
}) => {

    const taskItemsJSX = tasksList.map((task) => (
        <TaskItems
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
        />
    ));

    if (tasksList && tasksList.length > 0) {

    return (
        <div className="box">
            {incompletedTasks > 0 && (
                <h2 className={styles.title}>
                    📝 Il te reste encore <span className="important">{incompletedTasks}</span> tâches a accomplir
                </h2>
            )}

            {completedTasks > 0 && ( 
                <h2 className={styles.title}>
                    🎉 Tu as déjà accompli <span className="important">{completedTasks}</span> tâches !
                </h2>
            )}

            {tasksList && taskItemsJSX.length > 0 && (
                <ul className={styles.container}>
                    {taskItemsJSX}
                </ul>
            )}
        </div>
       );
    }

    return (
        <div className="box">
            <h2 className={styles.emptyState}>
                Salut, Tu n'as rien a faire ! Profite de ton temps libre...
            </h2>
        </div>
    );
};

export default TaskList;
