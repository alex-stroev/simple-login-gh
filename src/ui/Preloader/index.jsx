import React from "react";
import styles from "./styles.module.scss";

const Preloader = ({ fill }) => {
  const fillLoader = fill ? fill : "#ff8200";
  return (
    <div className={styles.loader}>
      <MyPreloader fill={fillLoader} />
    </div>
  );
};

function MyPreloader({ fill }) {
  return (
    <svg
      //   version="1.1"
      //   id="Layer_1"
      //   xmlns="http://www.w3.org/2000/svg"
      //   // xmlns:xlink="http://www.w3.org/1999/xlink"
      //   x="0px"
      //   y="0px"
      //   width="24px"
      //   height="30px"
      viewBox="0 0 24 30"
      //   style="enable-background:new 0 0 50 50;"
      // xml:space="preserve"
    >
      <rect x="0" y="10" width="4" height="10" fill={fill} opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect x="8" y="10" width="4" height="10" fill={fill} opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect x="16" y="10" width="4" height="10" fill={fill} opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </svg>
  );
}

export default Preloader;
