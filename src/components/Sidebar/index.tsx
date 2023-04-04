import styles from "./Sidebar.module.css";
import userBanner from "../../assets/user-bg.jpg";
import userImage from "../../assets/user-img.jpg";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={userBanner}
        alt="Banner de fundo do perfil do usuário"
        width={256}
        height={72}
      />

      <div className={styles.profile}>
        <Avatar source={userImage} />
        <strong>Gabriel Gonçalves</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
};
