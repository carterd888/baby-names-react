import React from "react";

function AddNames(props) {
  const myBabyNames = props.BabyNames;
  return (
    <ul>
      {myBabyNames.map((baby) => (
        <li className={baby.sex}>{baby.name}</li>
      ))}
    </ul>
  );
}


export default AddNames;