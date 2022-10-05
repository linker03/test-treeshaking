import styles from '../styles/Button.module.css';

const ButtonBase = ({ onClick }: { onClick(): void }) => {
  return (
    <button className={styles.root} onClick={onClick}>
      ButtonBase
    </button>
  );
};

export default ButtonBase;
