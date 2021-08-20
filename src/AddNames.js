import React from "react";
import compare from "./Compare.js"

function AddNames(props) {
  const myBabyNames = props.BabyNames;
  myBabyNames.sort(compare);
  return (
    <ul>
      {myBabyNames.map((baby) => (
        <li className={baby.sex}>{baby.name}</li>
      ))}
    </ul>
  );
}

// hopefully this works!

export default AddNames;