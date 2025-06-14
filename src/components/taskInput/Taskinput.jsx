// ce composant sera utilisee pour afficher le champ de saisie des taches
import styles from "./taskinput.module.css";
import {useState} from "react";
export const TaskInput = ({ addTask }) => {
    const [taskTitle, setTaskTitle] = useState("");
    // console.log(addTask);

    console.log(taskTitle);
    const handleInputChange = (e) => {
        // Logique pour gérer le changement de saisie
        setTaskTitle(e.target.value);
        // Vous pouvez également mettre à jour l'état ou effectuer d'autres actions ici
    };

    const handleAddTask = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
        addTask(taskTitle);
        setTaskTitle(""); // Réinitialise le champ de saisie après l'ajout de la tâche
  
       
    };
    return (
        <div className={`box ${styles.element}`}>
            <h2 className={styles.title}> ✅  Ajouter une tâche</h2>
            <form className={styles.form} onSubmit={handleAddTask}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Entrez votre tâche ici..."
                    onChange={handleInputChange}
                />
                <button type="submit" className={`button-primary ${styles.button}`}>
                    Ajouter
                </button>
            </form>
        </div>


    );
}