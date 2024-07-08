import React from "react";

const ButtonsCointainer = (props) => {
  const buttonsName = [

    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    "0",
    "*",
    "/",
    "=", 
  ];
  return (
<div
      id="buttons-cointainer"
      className="flex justify-center flex-wrap bg-gray-200 p-4 rounded-b-md"
    >
      {buttonsName.map((button, index) => (
        <button
          key={index}
          className="w-12 h-12 m-1 bg-white rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() =>props.onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsCointainer;
