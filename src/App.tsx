import { useAppDispatch, useAppSelector } from "./hooks";
import { decrement, amountAdded } from "./features/counter/counterSlice";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";
import { useState } from "react";
function App() {
  const value = useAppSelector((state) => state.counterSlice.value);
  const dispatch = useAppDispatch();
  const [numBerry, setNumBerry] = useState(10);

  const { data } = useFetchBreedsQuery(numBerry);

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl my-6">
        React Redux Toolkit And Flowbite TailwindCSS
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-col w-1/3">
          <span className="text-3xl">Counter: {value}</span>
          <button
            onClick={() => dispatch(amountAdded(5))}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Decrement
          </button>
        </div>
      </div>

      <div className="flex  justify-center flex-col">
        <p>Number of berries fetched: {data?.results.length}</p>
        <select
          className="w-1/3"
          value={numBerry}
          onChange={(e) => setNumBerry(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data?.results.map((items) => (
              <tr key={items.url}>
                <td>{items.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
