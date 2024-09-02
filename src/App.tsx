import { useState } from "react";


type PossibleMarks = "x" | "o";

function App() {
  const [currentMark, setCurrentMark] = useState<PossibleMarks>("x");
  

  function clickedButton(e: React.MouseEvent<HTMLDivElement, MouseEvent>, btnNumber : number) {

    
    console.log(e.target);
    console.log(btnNumber);

    const targetElement = e.target as HTMLDivElement;

    
    if(targetElement.classList.contains("initialState")) {
      // first time change

      if(currentMark === "x") {
        // if current mark is x, add x

        targetElement.classList.add("bg-x-mark");
        targetElement.classList.add("bg-contain");
        targetElement.classList.add("bg-no-repeat");
        targetElement.classList.add("bg-center");
        
        targetElement.classList.remove("initialState");
        targetElement.classList.add("addedMark");
        setCurrentMark("o");

      } else {
        // if current mark is o, add o

        targetElement.classList.add("bg-o-mark");
        targetElement.classList.add("bg-contain");
        targetElement.classList.add("bg-no-repeat");
        targetElement.classList.add("bg-center");

        targetElement.classList.remove("initialState");
        targetElement.classList.add("addedMark");
        setCurrentMark("x");
      }

    } 

  }

  function resetGame() {
    
    // selecting all added marks
    const allAddedMarks = document.querySelectorAll(".addedMark");

    // loop through remove all classes
    for(let i = 0; i < allAddedMarks.length; i++) {
      allAddedMarks[i].classList.remove("bg-x-mark");
      allAddedMarks[i].classList.remove("bg-o-mark");
      allAddedMarks[i].classList.remove("bg-contain");
      allAddedMarks[i].classList.remove("bg-no-repeat");
      allAddedMarks[i].classList.remove("bg-center");
      allAddedMarks[i].classList.add("initialState");
    }
  }

  return (
    <div className="gameUI bg-black h-[100vh]">
      <h1 className="text-3xl font-bold text-center pt-8 text-green-300 font-mono italic">
        Tic Tac Toe
      </h1>

      <div className="container grid grid-cols-3 gap-2 bg-green-600 mx-auto mt-8 p-4 rounded-xl">
        <div className="border-2 rounded-xl text-center text-2xl p-4 initialState" onClick={(e) => clickedButton(e, 1)}></div>
        <div className="border-2 rounded-xl text-center text-2xl p-4 initialState" onClick={(e) => clickedButton(e, 2)}></div>
        <div className="border-2 rounded-xl text-center text-2xl p-4 initialState" onClick={(e) => clickedButton(e, 3)}></div>
        <div className="border-2 rounded-xl text-center text-2xl p-4 initialState" onClick={(e) => clickedButton(e, 4)}></div>
        <div className="border-2 rounded-xl text-center text-2xl p-4 initialState" onClick={(e) => clickedButton(e, 5)}></div>
        <div className="border-2 rounded-xl text-center text-2xl p-4 initialState" onClick={(e) => clickedButton(e, 6)}></div>
        <div className="border-2 rounded-xl text-center text-2xl p-4 initialState" onClick={(e) => clickedButton(e, 7)}></div>
        <div className="border-2 rounded-xl text-center text-2xl p-4 initialState" onClick={(e) => clickedButton(e, 8)}></div>
        <div className="border-2 rounded-xl text-center text-2xl p-4 initialState" onClick={(e) => clickedButton(e, 9)}></div>
      </div>

      <div className="gameOptions flex justify-center mt-8">
        {/* <div className="border-2 mr-8 border-green-700 rounded-xl py-1 px-2 text-green-300">Start Game</div> */}
        <div className="border-2 border-green-700 rounded-xl py-1 px-2 text-green-300" onClick={resetGame}>Reset Game</div>
      </div>

    </div>
  )
}

export default App;