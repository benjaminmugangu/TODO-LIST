// Ce composant lui sera utilisee pour afficher l'entete de l'application
import style from './header.module.css';
import reactLogo from "../../assets/react.svg";
export const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div className={style.titleWrapper}>
                    <img src={reactLogo} alt="logo" width={50} height={50}></img>
                    <div className={style.title}>
                        <h1>TaskFlow</h1>

                        <div className="color-gray">
                            <code>Eliminez le chaos, suivez le flux.</code>
                        </div>
                    </div>
                </div>

                <div>
                    <code className="color-primary"> V.1.0 </code>
                </div>
            </div>
        </div>
        
    );
}