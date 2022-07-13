import type { RootState } from "./store";
import { useSelector } from "react-redux";

import { increment, decrement } from "./features/counter/counterSlice";
import { useDispatch } from "react-redux";

function App() {
  const count = useSelector((state: RootState) => state.counterSlice.value);
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl my-6">
        React Redux Toolkit And Flowbite TailwindCSS
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-col w-1/3">
          <span className="text-3xl">Counter: {count}</span>
          <button
            onClick={() => dispatch(increment())}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Decrenebt
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
