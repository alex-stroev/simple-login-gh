import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import News from "./components/News";
import { Kernel, MainMenuTop } from "./ui/";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Home from "./components/Home";
import users from "./data/users";

import styles from "./App.module.scss";

function App() {
  // const dispatch = useDispatch();

  // Берем имя юзера из localStorage. Redux нужен только для обновления стейта приложения, залогинен или нет
  const nameInLocalStorage = localStorage.getItem("seenecoNameInLocalStorage");
  const [isLogged, setIsLogged] = useState(Boolean(nameInLocalStorage));

  useEffect(() => {
    setIsLogged(Boolean(nameInLocalStorage));
  }, [nameInLocalStorage]);

  const reduxData = useSelector((state) => state.regInfo); // не выводим, нужен для ре-рендера

  const navigationLinks = [
    {
      href: "/",
      name: "На главную",
      element: <Home />,
    },
    {
      href: "/login",
      name: "Login",
      element: <Login nameInLocalStorage={nameInLocalStorage} users={users} />,
    },
    {
      href: "/news",
      name: "Новости",
      element: <News />,
    },
    {
      href: "/profile",
      name: "Профайл",
      element: (
        <Profile
          isDisabled={!isLogged}
          user={users.find((el) => el.name === nameInLocalStorage)}
        />
      ),
    },
  ];

  const excludedPaths = "/login";
  return (
    <Router basename="/simple-login-gh">
      <div className={styles.global}>
        <div className={styles.global__top}>
          <Kernel>
            <MainMenuTop
              items={navigationLinks}
              excludedPaths={excludedPaths}
            />
            {isLogged && <Welcome userName={nameInLocalStorage} />}
            <Routes>
              {navigationLinks.map((item) => (
                <Route
                  exact
                  path={item.href}
                  element={item.element}
                  key={item.href}
                  props={item.props}
                />
              ))}
            </Routes>
          </Kernel>
        </div>
        <div className={styles.global__bottom}>
          <Kernel>
            {/* <pre>{JSON.stringify(reduxData, null, 2)}</pre> */}
            <MainMenuTop
              items={navigationLinks}
              excludedPaths={excludedPaths}
            />
          </Kernel>
        </div>
      </div>
    </Router>
  );
}

export default App;
