import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/feature/createSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-fill flex justify-center items-center">
      <div className="flex border border-purple-300 p-10 rounded-md bg-slate-50">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 font-semibold text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 font-semibold text-white"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-3 py-2 rounded-md bg-purple-500 font-semibold text-white"
        >
          incrementByAmount
        </button>
      </div>
    </div>
  );
}

export default App;
