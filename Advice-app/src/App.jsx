import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);
 
const arr = ["Eating" , "Coding" , "Sleeping" , "Repeat"];

  const previousHandler = () => {

    step === 1 ? setStep(4) : setStep(step - 1)
  }
  const nextHandler = () => {

    step === 4 ? setStep(1) : setStep(step + 1) 
  }
  return (
    <div className="h-screen ">
      <h1 className="text-center mt-4 text-2xl font-bold">
        Step Counter / Advice App
      </h1>
      <div className="numbers flex p-10 justify-around items-center gap-5 ">
        <div
          className={`font-semibold text-xl border border-gray-400 rounded-full h-10 w-10 flex items-center justify-center  p-2 ${step === 1 ? "bg-gray-400  border-none text-white" : ""}`}
        >
          1
        </div>
        <div
          className={`font-semibold text-xl border border-gray-400 rounded-full h-10 w-10 flex items-center justify-center  p-2 ${step === 2 ? "bg-gray-400  border-none text-white" : ""}`}
        >
          2
        </div>
        <div
          className={`font-semibold text-xl border border-gray-400 rounded-full h-10 w-10 flex items-center justify-center  p-2 ${step === 3 ? "bg-gray-400  border-none text-white" : ""}`}
        >
          3
        </div>
        <div
          className={`font-semibold text-xl border border-gray-400 rounded-full h-10 w-10 flex items-center justify-center  p-2 ${step === 4 ? "bg-gray-400  border-none text-white" : ""}`}
        >
          4
        </div>
      </div>
      {/* Advices / Counts */}
      <div className=" text-center text-4xl font-semibold mb-20">{arr[step - 1]}</div>
      <div className="flex items-center justify-center gap-20 mt-10">
        <button
          className="border w-[80px] rounded text-lg bg-red-600 text-white"
          onClick={previousHandler}
        >
          Previous
        </button>
        <button
          className="border w-[80px] rounded text-lg bg-green-600 text-white "
          onClick={nextHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
