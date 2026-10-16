import { useSelector } from "react-redux";

const Kuchbi = () => {
   const count =  useSelector((state) => state.wooo)
  return (
    <div>
      Count2 wow : {count.wow}
    </div>
  )
}

export default Kuchbi
