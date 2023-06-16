import React, { useState } from "react";
import styles from "./Fact.module.css";

function Fact(props) {
  const [i, setI] = useState(0);
  return (
    <div className={styles.fact}>
      <h1>{props.fact.name}</h1>
      {props.fact.component}
      <p>{props.fact.facts[i]}</p>
      <button
        onClick={() =>
          setI((i) => (i < props.fact.facts.length - 1 ? i + 1 : 0))
        }
      >
        Next Fact
      </button>
    </div>
  );
}

function functionIncrement() {
  i++;
}

export default Fact;
