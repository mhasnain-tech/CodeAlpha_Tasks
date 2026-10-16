import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/Slices/counter";
import Kuchbi from "./components/Kuchbi";

const App = () => {
  const dispatch = useDispatch();
  const wow = useSelector((state) => state.wooo)
  return (
   <>
    <div>
      Counter Application 
     <br />
      Count : {wow.wow}
      <div>
        <button onClick={() => {dispatch(decrement())}}>Decrement</button>
        <button onClick={() => {dispatch(increment())}}>Increment</button>
        <button onClick={() => {dispatch(reset())}}>Reset</button>
      </div>
    </div>
    
    <div>
      <Kuchbi />
    </div>
    </>

    
  )
}

export default App
