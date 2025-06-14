// ce composant sera utilise pour afficher les elements de la liste des taches

import styles from './taskitems.module.css';

const TaskItems = () => {
    return (
        <li className={`${styles.container} ${styles.default}`}>
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idSuccess}`}>
                    1
                </div>
                <div className={`${styles.contentDefault} ${styles.marge}`}>
                    Ranger mon bureau et finir d'apprendre React
                </div>
            </div>
            <button className="button-primary">X</button>
        </li>
    );
}

export default TaskItems;
