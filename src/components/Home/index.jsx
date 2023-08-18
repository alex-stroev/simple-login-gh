import styles from "./styles.module.scss";
import users from "../../data/users";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Главная страница</h1>
      <h2>Доступные пользователи:</h2>

      {users.map((item) => (
        <div className={styles.user} key={item.name}>
          <span className={styles.user__name}>{item.name}</span> /{" "}
          <span className={styles.user__password}>{item.password}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
