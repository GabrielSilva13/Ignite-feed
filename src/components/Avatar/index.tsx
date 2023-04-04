import styles from "./Avatar.module.css";

interface AvatarProps {
  source: string;
  hasBorder?: boolean;
}

export const Avatar = ({ source, hasBorder = true }: AvatarProps) => {
  return (
    <img
      className={hasBorder ? `${styles.avatar}` : `${styles.avatarHasNoBorder}`}
      src={source}
      alt="Foto de Perfil do usuário"
    />
  );
};
