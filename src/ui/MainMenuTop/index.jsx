import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

import styles from "./styles.module.scss";

const MainMenuTop = ({ items, excludedPaths }) => {
  const location = useLocation();
  const noWayLinks = excludedPaths.split(",").map((item) => item.trim());
  const output = items.filter((item) => !noWayLinks.includes(item.href));

  return (
    <ul className={styles.list}>
      {output.map((item) => (
        <li key={item.name}>
          <Link
            to={item.href}
            className={classNames({
              [styles.active]: item.href === location.pathname,
            })}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenuTop;
