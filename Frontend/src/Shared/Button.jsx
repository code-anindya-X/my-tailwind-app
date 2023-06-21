import React from "react";

const Button = (props) => {
    const className= "bg-indigo text-orange-200 pr-5 pl-5 pt-3 pb-3 rounded-2xl hover:bg-gray-dark hover:text-slate-50 font-semibold" +props.className
  return (
    <div>
      <button className={className} onClick={props.onClick}>
        {props.buttonname}
      </button>
    </div>
  );
};

export default Button;
