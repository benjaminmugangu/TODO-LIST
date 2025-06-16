// Footer component

import styles from './footer.module.css';

const Footer = ({ completedTasks }) => {
    if (completedTasks) {
        return(
            <footer>
                <code className={styles.footer}> Tu as eliminee <span className="important">{completedTasks}</span> tach
                {completedTasks > 1 ? "es" : "e"} de la liste </code>
            </footer>
        );
    }

    return null;
}

export default Footer;
