import { useEffect, useState } from "react";
import "./App.css";
import { BsSun } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { CSSTransition } from "react-transition-group";
function App() {
  const [result, setResult] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const calculatePercentage = () => {
    try {
      const value = parseFloat(result);
      const percentage = value / 100;
      setResult(percentage.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  function changeSign() {
    if (parseFloat(result) > 0) {
      setResult(parseFloat(-result).toString());
    } else {
      setResult(Math.abs(parseFloat(result)).toString());
    }
  }

  return (
    <div>
      <CSSTransition in={darkMode} classNames="icon-transition" timeout={300}>
        <div className="grid grid-cols-6 grid-rows-[repeat(7,1fr)] h-[100vh] font-['arial'] dark:bg-black">
          <div className="border-black  border-[1px] col-start-3 col-end-5 row-start-2 row-end-7 grid grid-cols-4 grid-rows-[repeat(7,1fr)] p-3 text-2xl gap-2 rounded-xl dark:border-white dark:border-[1px] dark:text-white ">
            <div
              className="text-white row-start-1 row-end-2 bg-white w-12 h-12 rounded-2xl   cursor-pointer dark:bg-black"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <BsSun className="mx-auto mt-3 p-2 h-10 w-10 rounded-2xl text-2xl dark:text-white hover:bg-slate-500 transition-all duration-200" />
              ) : (
                <BsMoonFill className="text-black mx-auto mt-3 p-2 h-10 w-10 rounded-2xl text-2xl hover:bg-slate-500 transition-all duration-200 hover:text-white active:text-black" />
              )}
            </div>

            <input
              disabled
              value={result}
              className="col-start-1 col-end-5 row-start-2 row-end-3 text-black bg-white text-right text-5xl outline-none dark:bg-black dark:text-white"
            />
            <button
              onClick={clear}
              className="transition-all duration-200  bg-slate-500 hover:bg-slate-400 active:bg-slate-600 col-start-1 col-end-2 row-start-3 row-end-4  rounded-full w-16 h-16 justify-self-center "
            >
              AC
            </button>
            <button
              onClick={changeSign}
              className="transition-all duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 row-start-3 row-end-4  rounded-full w-16 h-16 justify-self-center"
            >
              +/-
            </button>
            <button
              onClick={calculatePercentage}
              value={"%"}
              className="transition-all duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 row-start-3 row-end-4  rounded-full w-16 h-16 justify-self-center"
            >
              %
            </button>
            <button
              onClick={handleClick}
              value={"/"}
              className="transition-all duration-200 bg-orange-500 hover:bg-orange-400 active:bg-orange-600 row-start-3 row-end-4  rounded-full w-16 h-16 col-start-4 col-end-5 justify-self-center"
            >
              ÷
            </button>
            <button
              onClick={handleClick}
              value={"7"}
              className="transition-all duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 col-start-1 col-end-2 row-start-4 row-end-5  rounded-full w-16 h-16 justify-self-center"
            >
              7
            </button>
            <button
              onClick={handleClick}
              value={"8"}
              className="transition-all duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 row-start-4 row-end-5 col-start-2 col-end-3  rounded-full w-16 h-16 justify-self-center"
            >
              8
            </button>
            <button
              onClick={handleClick}
              value={"9"}
              className="transition-all duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 row-start-4 row-end-5 col-start-3 col-end-4  rounded-full w-16 h-16 justify-self-center"
            >
              9
            </button>
            <button
              onClick={handleClick}
              value={"*"}
              className="transition-all duration-200 bg-orange-500 hover:bg-orange-400 active:bg-orange-600 row-start-4 row-end-5   rounded-full w-16 h-16 col-start-4 col-end-5 justify-self-center"
            >
              *
            </button>
            <button
              onClick={handleClick}
              value={"4"}
              className="transition-all duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 col-start-1 col-end-2 row-start-5 row-end-6   rounded-full w-16 h-16 justify-self-center"
            >
              4
            </button>
            <button
              onClick={handleClick}
              value={"5"}
              className="transition-all duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 row-start-5 row-end-6 col-start-2 col-end-3  rounded-full w-16 h-16 justify-self-center"
            >
              5
            </button>
            <button
              onClick={handleClick}
              value={"6"}
              className="transition-all duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 row-start-5 row-end-6 col-start-3 col-end-4  rounded-full w-16 h-16 justify-self-center"
            >
              6
            </button>
            <button
              onClick={handleClick}
              value={"-"}
              className="transition-all duration-200 bg-orange-500 hover:bg-orange-400 active:bg-orange-600 row-start-5 row-end-6   rounded-full w-16 h-16 col-start-4 col-end-5 justify-self-center"
            >
              -
            </button>
            <button
              onClick={handleClick}
              value={"1"}
              className="transition-all duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 col-start-1 col-end-2 row-start-6 row-end-7  rounded-full w-16 h-16 justify-self-center"
            >
              1
            </button>
            <button
              onClick={handleClick}
              value={"2"}
              className="transition-all duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 row-start-6 row-end-7 col-start-2 col-end-3  rounded-full w-16 h-16 justify-self-center"
            >
              2
            </button>
            <button
              onClick={handleClick}
              value={"3"}
              className="transition-all duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 row-start-6 row-end-7 col-start-3 col-end-4  rounded-full w-16 h-16 justify-self-center"
            >
              3
            </button>
            <button
              onClick={handleClick}
              value={"+"}
              className="transition-all duration-200 bg-orange-500 hover:bg-orange-400 active:bg-orange-600 row-start-6 row-end-7   rounded-full w-16 h-16 col-start-4 col-end-5 justify-self-center"
            >
              +
            </button>
            <button
              onClick={handleClick}
              value={"0"}
              className="transition-all duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 col-start-1 col-end-3 row-start-7 row-end-8  rounded-full h-16"
            >
              0
            </button>
            <button
              onClick={handleClick}
              value={"."}
              className="transition-all text-4xl duration-200 bg-slate-500 hover:bg-slate-400 active:bg-slate-600 row-start-7 row-end-8 col-start-3 col-end-4  rounded-full w-16 h-16 justify-self-center"
            >
              .
            </button>

            <button
              onClick={calculate}
              className="transition-all duration-200 bg-orange-500 hover:bg-orange-400 active:bg-orange-600 row-start-7 row-end-8   rounded-full w-16 h-16 col-start-4 col-end-5 justify-self-center"
            >
              =
            </button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
