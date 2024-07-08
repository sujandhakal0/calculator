import React, { useState } from "react";
import Display from "./components/Display";
import ButtonsCointainer from "./components/ButtonsCointainer";

function App() {
  const [displayValue, setDisplayValue] = useState('')
  const onButtonClick = (buttonText) =>{
    if(buttonText == 'C'){
       setDisplayValue("")
    }else if (buttonText == '='){
      const result = eval(displayValue)
      setDisplayValue(result)
    }else{
      setDisplayValue(displayValue + buttonText)
    }

    console.log(buttonText)
  }

  return (
    <div className="flex justify-center items-center h-screen bg-center" style={{
      backgroundImage: 'url("https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
    }}>
      <div className="bg-white rounded-md overflow-hidden w-[300px] shadow-2xl">
        <Display value={displayValue}/>
        <ButtonsCointainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
