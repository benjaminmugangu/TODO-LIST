// ce composant est utilisé pour afficher l'intégralité de la fonctionnalité des tâches 
import { useState, useEffect } from "react";
import Footer from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/Taskinput";
import TaskList from "./taskList/Tasklist";

export const TaskContainer = () => {

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {// Récupération des tâches stockées
        const storedTasks = localStorage.getItem("tasksList");// On récupère les tâches stockées dans le localStorage

        console.log("StoredTasks:", storedTasks);
        if (storedTasks) {
            setTaskList(JSON.parse(storedTasks));
        }
    }, []);

    // nous allons maintenant sauvegarder les tâches dans le localStorage
    const saveTasksToLocalStorage = (tasks) => {
        localStorage.setItem("tasksList", JSON.stringify(tasks));
    }; 


    const addTask = (title) => {
        const newTask = {
            id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1, // Auto-increment ID
            title: title,
            completed: false
        };
        const updateTasks = [...taskList, newTask];
        setTaskList(updateTasks);// Mise à jour de l'état avec la nouvelle tâche
        saveTasksToLocalStorage(updateTasks);// Sauvegarde des tâches dans le localStorage
    };

    const editTask = (id, completedValue) => {

        const updatedTasks = taskList.map((task) => 
            task.id === id ? { ...task, completed: completedValue } : task
        );
        setTaskList(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const deleteTask = (id) => {
        const updatedTasks = taskList.filter((task) => task.id !== id);
        setTaskList(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const getTaskCounts = () => {
        const completedTasks = taskList.filter((task) => task.completed).length;
        const incompletedTasks = taskList.length - completedTasks;
        return { completedTasks, incompletedTasks };
    };

    const { completedTasks, incompletedTasks } = getTaskCounts();

    return (
        <main>
            <Header />
            <TaskInput addTask={addTask} />
            <TaskList 
                tasksList={taskList}
                editTask={editTask}
                deleteTask={deleteTask}
                completedTasks={completedTasks}
                incompletedTasks={incompletedTasks}
            />
            <Footer completedTasks={completedTasks} />  
        </main>
    );
};
