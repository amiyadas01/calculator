

import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handelInput = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString()); // Use eval cautiously
      } catch (error) {
        console.log("Invalid input", error);
      }
    } else if (value === "C") {
      setInput(""); // Clear input
    }
    else {
      setInput(input + value); // Append value to input
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
   
    "4",
    "5",
    "6",
    
    "1",
    "2",
    "3",
   
    "C",
    "0",
    "=",
    
  ];
  const buttons2 = ["/","*","-","+"]

  return (
    <div className="h-screen w-full bg-blue-950 flex justify-center relative">
      <h1 className=" absolute text-5xl bg-gradient-to-tr from-red-700 via-black to-neutral-200 font-bold bg-clip-text text-transparent">Calculator </h1>
    <div className="relative h-[200px] sm:h-[220px] md:h-[250px] lg:h-[400px] w-[250px] sm:w-[300px] md:w-[350px] lg:w-[340px] bg-gradient-to-tr from-red-700 via-black to-neutral-200 font-bold rounded-md flex flex-col m-20">
      {/* Input Display */}
      <span className="w-[180px] sm:w-[200px] md:w-[250px] lg:w-[250px] p-[20px] sm:p-[38px] md:p-[35px] lg:p-[30px] border-2 border-solid border-black flex justify-end items-center px-4 text-2xl text-blue-800 overflow-clip hover:bg-gradient-to-tr from-neutral-200 via-black to-red-700 ">
        {input || "0"}
      </span>
  
      {/* Operator Button */}
      <div className="absolute top-0 right-0 w-[70px] sm:w-[100px] md:w-[100px] lg:w-[90px] h-[204px] sm:h-[240px] md:h-[250px] lg:h-[400px] grid grid-cols-1 gap-none ">
        {buttons2.map((button) => (
          <button
            key={button}
            className="h-auto w-auto border-2 text-blue-800 border-black text-lg hover:bg-gradient-to-tr from-black to-red-500 appearance-none "
            onClick={() => handelInput(button)} // Pass as a callback
          >
            {button}
          </button>
        ))}
      </div>
  
      {/* Number Buttons */}
      <div className="w-[180px] sm:w-[200px] md:w-[250px] lg:w-[250px] h-[98px] sm:h-[198px] md:h-[145px] lg:h-[305px] grid grid-cols-3 gap-none ">
        {buttons.map((button) => (
          <button
            key={button}
            className="h-auto w-auto border-2 border-black text-blue-800 text-lg hover:bg-gradient-to-tr from-neutral-200 to-black appearance-none"
            onClick={() => handelInput(button)} // Pass as a callback
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  </div>
  
  );
}

export default App;
