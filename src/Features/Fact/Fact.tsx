import React from "react";
import styles from "./Fact.module.css";

function Fact(props) {
  return (
    <div className={styles.fact}>
      <h1>{props.fact.name}</h1>
      {props.fact.component}
      <p>{props.fact.facts[0]}</p>
    </div>
  );
}

export default Fact;
