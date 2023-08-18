import styles from "./styles.module.scss";
import { Button } from "../../ui";
import { useDispatch } from "react-redux";
import { addRegInfo } from "../../store/actions";

const Welcome = () => {
  const nameInLocalStorage = localStorage.getItem("seenecoNameInLocalStorage");
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(addRegInfo(false));
    localStorage.removeItem("seenecoNameInLocalStorage");
  };

  return (
    <div className={styles.welcome}>
      Здавствуйте, <b>{nameInLocalStorage}</b>
      <Button onClick={() => logOut()} className={styles.welcome__button}>
        Выйти
      </Button>
    </div>
  );
};

export default Welcome;
