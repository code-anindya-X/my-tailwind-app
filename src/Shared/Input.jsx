import React from "react";

const Input = (props) => {
  const className = "border h-9" + props.className;
  return (
    <div>
      {props.label && <label> {props.label} </label>}
      <input
        className={className}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      ></input>
    </div>
  );
};

export default Input;
