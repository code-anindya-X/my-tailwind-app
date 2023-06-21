import { useState } from "react";
import React from "react";
import Button from "../Shared/Button";
import Input from "../Shared/Input";

const BmiCalculator = () => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmi, setBmi] = useState("");
  const [showbmiError, setShowbmiError] = useState("");

  const [bmiError, setbmiError] = useState(false);
  const [bmiErrorMsg, setbmiErrorMsg] = useState(
    "Enter The Value of Height and Weight"
  );

  const [color, setColor]= useState("");

  const onNameChangeHandler = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };

  const onHeightChangeHandler = (event) => {
    // console.log(event.target.value);
    setHeight(event.target.value);
  };

  const onWeightChangeHandler = (event) => {
    // console.log(event.target.value);
    setWeight(event.target.value);
  };

  const BmiClearHandler = () => {
    setName("");
    setHeight("");
    setWeight("");
  };
  const calculateBmi = () => {
    if (height && weight) {
      setbmiError(false);
      setbmiErrorMsg("");
      var calbmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
      setBmi(calbmi);
      setName("");
      setHeight("");
      setWeight("");
      if (calbmi < 18.5) {
        setShowbmiError("You are underweight");
      } else if (calbmi >= 18.5 && calbmi < 24.9) {
        setShowbmiError("You are normal");
      } else if (calbmi >= 25 && calbmi < 29.9) {
        setShowbmiError("You are overweight");
      } else {
        setShowbmiError("You are obese");
      }
    } else {
      setbmiError(true);
      console.log(bmiError);
    }
  };
  return (
    <>
      <div className="lg:pr-5 lg:pl-5 lg:pt-4 lg:pb-4 md:pt-2 md:pb-2 text-gray-light bg-violet-950 break-words font-prompt font-bold md:text-5xl sm:text-4xl lg:text-6xl">
        <p className="flex justify-center items-center">Hello Tailwind</p>
      </div>
      <div className="text-center">
        <p className="text-indigo-600 text-4xl pt-2 pb-3 mt-2 mb-2 font-serif font-bold">
          BMI calculator
        </p>
      </div>

      <div className="flex justify-center">
        <Input
          type="text"
          placeholder="Name"
          className="mt-3 mb-3 ml-2 mr-2 p-3"
          label="Name: "
          onChange={(event) => onNameChangeHandler(event)}
          value={name}
        />
        <Input
          type="number"
          placeholder="Height"
          className="mt-3 mb-3 ml-2 mr-2 p-3"
          label="Height: "
          onChange={(event) => onHeightChangeHandler(event)}
          value={height}
        />
        <Input
          type="number"
          placeholder="Weight"
          className="mt-3 mb-3 ml-2 mr-2 p-3"
          label="Weight: "
          onChange={(event) => onWeightChangeHandler(event)}
          value={weight}
        />
      </div>

      <div className="flex justify-center items-center lg:mt-6 md:mt-4 sm:mt-2">
        {/* <button
          className="bg-indigo text-orange-200 pr-5 pl-5 pt-3 pb-3 rounded-2xl hover:bg-gray-dark hover:text-slate-50 font-semibold mr-2 ml-2"
          onClick={calculateBmi}
        >
          Calculate BMI
        </button> */}
        {/* <Button buttonname="--->" className="mr-2 ml-2" /> */}
        <Button
          buttonname="Calculate BMI"
          className="mr-2 ml-2"
          onClick={calculateBmi}
        />

        <Button
          buttonname="Clear Textbox"
          className="mr-2 ml-2"
          onClick={BmiClearHandler}
        />
        {/* <Button buttonname="<---" className="mr-2 ml-2" /> */}
      </div>

      <div className="flex justify-center items-center lg:mt-6 md:mt-4 sm:mt-2">
        <div>
          {bmi && (
            <span>
              Your BMI is: <b>{bmi}</b>
              <div>
                <b>{showbmiError}</b>
              </div>
            </span>
          )}
        </div>
        <div>{bmiErrorMsg}</div>
      </div>
    </>
  );
};

export default BmiCalculator;
