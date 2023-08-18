import { Input, Button } from "../../ui";
import { useState, createRef } from "react";
import users from "../../data/users";
import { useDispatch } from "react-redux";
import { addRegInfo } from "../../store/actions";
import { Navigate } from "react-router-dom";

import styles from "./styles.module.scss";

const Login = () => {
  const nameRef = createRef();
  const passwordRef = createRef();

  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const nameInLocalStorage = localStorage.getItem("seenecoNameInLocalStorage");
  const [isLogged, setIsLogged] = useState(Boolean(nameInLocalStorage));

  const logIn = () => {
    if (!users.some((elem) => elem.name === nameRef.current.value.trim())) {
      setMessage(<p>Нет такого пользователя</p>);
    } else if (
      users.find((elem) => elem.name === nameRef.current.value.trim())
        .password !== passwordRef.current.value.trim()
    ) {
      setMessage(<p>Неправильный пароль</p>);
    } else {
      dispatch(addRegInfo(nameRef.current.value.trim()));
      localStorage.setItem(
        "seenecoNameInLocalStorage",
        nameRef.current.value.trim()
      );
      setIsLogged(true);
    }
  };
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <Input
        type="text"
        placeholder="Имя пользователя"
        ref={nameRef}
        onChange={() => setMessage("")}
        className={styles.login__input}
      />
      <Input
        type="password"
        placeholder="Пароль"
        ref={passwordRef}
        onChange={() => setMessage("")}
        className={styles.login__input}
      />
      <Button onClick={() => logIn()}>Войти</Button>
      {message}
      {isLogged && <Navigate to="/profile" />}
    </div>
  );
};

export default Login;
