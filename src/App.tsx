import { useState, useEffect } from "react";


type PossibleMarks = "x" | "o";
const GameBoard = ["", "", "",
  "", "", "",
  "", "", ""
]

function App() {
  const [currentMark, setCurrentMark] = useState<PossibleMarks>("x");
  const [gameBoard, setGameBoard] = useState(GameBoard);
  const [winner, setWinner] = useState<boolean | string>(false);
  const [isDraw, setIsDraw] = useState<boolean>(false);

  useEffect(() => {
    // straight lines

    const isWinnerFound = checkHorizontalLines() || checkVerticalLines() || checkDiagnoalLines();

    // if winner is found, return
    if (isWinnerFound) {
      return;
    }

    // if no winner is found, check for draw
    checkDraw();


  }, [gameBoard])


  function checkDraw() {

    if (gameBoard.every((mark) => mark !== "")) {
      setIsDraw(true);
    }
  }

  function whoWon(mark: PossibleMarks) {

    if (mark === "x") {
      setWinner("player 1");
    } else {
      setWinner("player 2");
    }
  }

  function checkHorizontalLines() {
    // horizontal straight lines
    if (gameBoard[0] !== "") {

      // horizontal line 1
      if ((gameBoard[0] === gameBoard[1]) && (gameBoard[1] === gameBoard[2])) {
        console.log(" horizontal line 1 has winner");
        whoWon(gameBoard[0] as PossibleMarks);
        return true;
      }


    }

    if ((gameBoard[3] !== "")) {

      // horizontal line 2
      if ((gameBoard[3] === gameBoard[4]) && (gameBoard[3] === gameBoard[5])) {

        console.log("horizontal line 2 has winner");
        whoWon(gameBoard[3] as PossibleMarks);
        return true;
      }

    }

    if ((gameBoard[6] !== "")) {

      // horizontal line 3
      if ((gameBoard[6] === gameBoard[7]) && (gameBoard[6] === gameBoard[8])) {

        console.log("horizontal line 3 has winner");
        whoWon(gameBoard[6] as PossibleMarks);
        return true;
      }
    }
  }

  function checkVerticalLines() {

    if (gameBoard[0] !== "") {

      if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
        console.log("vertical line 1 has winner")
        whoWon(gameBoard[0] as PossibleMarks);
        return true;
      }

    }

    if (gameBoard[1] !== "") {

      if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
        console.log("vertical line 2 has winner");
        whoWon(gameBoard[1] as PossibleMarks);
        return true;
      }
    }

    if (gameBoard[2] !== "") {

      if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
        whoWon(gameBoard[2] as PossibleMarks);
        console.log("vertical line 3 has winner");
        return true;
      }
    }

  }

  function checkDiagnoalLines() {

    if (gameBoard[0] !== "") {

      if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
        whoWon(gameBoard[0] as PossibleMarks);
        console.log("diagonal line 1 has winner");
        return true;
      }
    }

    if (gameBoard[2] !== "") {

      if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
        whoWon(gameBoard[2] as PossibleMarks);
        console.log("diagonal line 2 has winner");
        return true;
      }
    }
  }

  function settingGameBoard(btnNumber: number, mark: PossibleMarks) {

    console.log("changing game board");
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [...prevGameBoard];
      newGameBoard[btnNumber - 1] = mark;
      console.log(newGameBoard);
      return newGameBoard;
    })
  }

  function clickedButton(e: React.MouseEvent<HTMLDivElement, MouseEvent>, btnNumber: number) {

    // stopping the game if there is a winner
    if (winner !== false) {
      return;
    }

    console.log(e.target);
    console.log(btnNumber);

    const targetElement = e.target as HTMLDivElement;


    if (targetElement.classList.contains("initialState")) {
      // first time change

      if (currentMark === "x") {
        // if current mark is x, add x

        targetElement.classList.add("bg-x-mark");
        targetElement.classList.add("bg-contain");
        targetElement.classList.add("bg-no-repeat");
        targetElement.classList.add("bg-center");

        targetElement.classList.remove("initialState");
        targetElement.classList.add("addedMark");

        settingGameBoard(btnNumber, "x");
        setCurrentMark("o");

      } else {
        // if current mark is o, add o

        targetElement.classList.add("bg-o-mark");
        targetElement.classList.add("bg-contain");
        targetElement.classList.add("bg-no-repeat");
        targetElement.classList.add("bg-center");

        targetElement.classList.remove("initialState");
        targetElement.classList.add("addedMark");

        settingGameBoard(btnNumber, "o");
        setCurrentMark("x");
      }

    }

  }

  function resetGame() {

    // selecting all added marks
    const allAddedMarks = document.querySelectorAll(".addedMark");

    // loop through remove all classes
    for (let i = 0; i < allAddedMarks.length; i++) {
      allAddedMarks[i].classList.remove("bg-x-mark");
      allAddedMarks[i].classList.remove("bg-o-mark");
      allAddedMarks[i].classList.remove("bg-contain");
      allAddedMarks[i].classList.remove("bg-no-repeat");
      allAddedMarks[i].classList.remove("bg-center");
      allAddedMarks[i].classList.add("initialState");
    }

    // reset game board
    setGameBoard(["", "", "", "", "", "", "", "", ""]);
    setWinner(false);
    setIsDraw(false);
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

      {
        winner !== false ? <div className="text-3xl font-bold text-center pt-8 text-green-300 font-mono italic">
          {winner} is won
        </div> : <></>
      }

      {
        isDraw ? <div className="text-3xl font-bold text-center pt-8 text-green-300 font-mono italic"> It's a draw </div> : <></>
      }

      <div className="gameRules mt-8 text-green-300 text-start ml-8 font-serif">
        <h2 className="text-2xl font-bold mb-4 text-center">Game Rules</h2>
        <p className="text-lg">1. Player 1 starts the game</p>
        <p className="text-lg">2. Player 1 marks with X and Player 2 marks with O</p>
        <p className="text-lg">3. The player who marks 3 straight in lines wins the game</p>
        <p className="text-lg">4. Lines can be horizontally straight, vertically straight, or diagonal</p>
        <p className="text-lg">5. The game will reset when the reset button is clicked</p>
      </div>


    </div>
  )
}

export default App;