

function App() {
  return (
    <div className="gameUI bg-black h-[100vh]">
      <h1 className="text-3xl font-bold text-center pt-8 text-green-300 font-mono italic">
        Tic Tac Toe
      </h1>

      <div className="container grid grid-cols-3 gap-2 bg-green-600 mx-auto mt-8 p-4 rounded-xl">
        <div className="border-2 rounded-xl text-center text-2xl">X</div>
        <div className="border-2 rounded-xl text-center text-2xl">X</div>
        <div className="border-2 rounded-xl text-center text-2xl">X</div>
        <div className="border-2 rounded-xl text-center text-2xl">X</div>
        <div className="border-2 rounded-xl text-center text-2xl">X</div>
        <div className="border-2 rounded-xl text-center text-2xl">X</div>
        <div className="border-2 rounded-xl text-center text-2xl">X</div>
        <div className="border-2 rounded-xl text-center text-2xl">X</div>
        <div className="border-2 rounded-xl text-center text-2xl">X</div>
      </div>

      <div className="gameOptions flex justify-center mt-8">
        <div className="border-2 mr-8 border-green-700 rounded-xl py-1 px-2 text-green-300">Start Game</div>
        <div className="border-2 border-green-700 rounded-xl py-1 px-2 text-green-300">Reset Game</div>
      </div>

    </div>
  )
}

export default App;