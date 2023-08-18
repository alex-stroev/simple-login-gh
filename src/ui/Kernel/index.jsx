import styles from "./styles.module.scss";

const Kernel = ({ children }) => {
  return <div className={styles.kernel}>{children}</div>;
};

export default Kernel;
