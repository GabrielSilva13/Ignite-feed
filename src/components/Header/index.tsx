import styles from "./Header.module.css";
import igniteLogo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do ignite" width="64.08" height="60.76" />
      <strong>Ignite Feed</strong>
    </header>
  );
};
