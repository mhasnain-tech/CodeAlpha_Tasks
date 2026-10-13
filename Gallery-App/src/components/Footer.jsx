
const Footer = ({SetPage , SetLimit}) => {
  return (
    <div className="bg-[#1E293B] flex justify-between items-center p-1.5">
      <div className="flex  gap-10 bb">
        <p className="text-2xl font-bold italic para">Pages : </p>
        {[1, 2, 3, 4, 5].map((num, id) => <button className=' cursor-pointer hover:border hover:bg-blue-500 hover:text-white w-[30px] h-[30px] rounded-full border font-bold italic' onClick={(e) => SetPage(e.target.innerText)} key={id}>{num}</button>)}
      </div>
      <div className="dde">
       <select className="bg-[#1E293B] sel w-[100px] border border-2 rounded" onChange={(e) => SetLimit(e.target.value)} > 
        <option selected value="8">8</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
       </select>
      </div>
    </div>
  )
}

export default Footer
