// ce composant est utilisee pour afficher l'integralite de la fonctionnalite des taches 
import { useState } from "react";
import Footer from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/Taskinput";
import TaskList from "./taskList/Tasklist";

export const TaskContainer = () => {

    const [taskList, setTaskList] = useState([
        // {
        //     id: 1,
        //     title: "Ranger mon bureau et finir d'apprendre React",
        //     completed: false
        // },
        // {
        //     id: 2,
        //     title: "Faire les courses pour la semaine",
        //     completed: true
        // },
        // {
        //     id: 3,
        //     title: "Préparer le repas du soir",
        //     completed: false
        // }

    ]);

    console.log("taskList: >>", taskList);

    const addTask = (title) => {
        const newTask = {
            id: taskList.length + 1,
            title: title,
            completed: false
        };
        setTaskList([...taskList, newTask]);// Ajoute la nouvelle tâche à la liste, sans la modifier, en créant une nouvelle référence, ce qui permet à React de détecter les changements.
    }

    console.log(taskList);
    

    // console.log("Notre contenu est chargee ici ");
    return(
        <main>
            <Header />
            <TaskInput addTask={addTask} />
            <TaskList />
            <Footer />
        </main>
    ); 
    
};

