import React from "react";
import styles from "./Test.module.css";

const Test = () => {
  console.log("test");
  return (
    <div className={`${styles.greenText} ${styles.salmon}`}>
      test content appears here
    </div>
  );
};

export default Test;
