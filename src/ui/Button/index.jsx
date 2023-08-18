import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Button = (props) => {
  const { className = "", onClick = () => {}, disabled = false } = props;
  return (
    <button
      onClick={() => onClick()}
      className={classNames(styles.button, className)}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
