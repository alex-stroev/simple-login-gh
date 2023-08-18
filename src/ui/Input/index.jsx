import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const {
    className = "",
    value,
    onFocus = () => {},
    onBlur = () => {},
    onChange = () => {},
    disabled = false,
    placeholder,
    type = "text" || "password",
  } = props;
  return (
    <input
      value={value}
      onFocus={(e) => onFocus(e)}
      onBlur={(e) => onBlur(e)}
      onChange={(e) => onChange(e)}
      className={classNames(styles.input, className)}
      disabled={disabled}
      type={type}
      ref={ref}
      placeholder={placeholder}
    />
  );
});

export default Input;
