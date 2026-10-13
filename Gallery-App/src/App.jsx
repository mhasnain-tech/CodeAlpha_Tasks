import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import axios from "axios";
import Gallery from "./components/Gallery";

const App = () => {
  const [data, SetData] = useState([]);
  const [page, SetPage] = useState(1);
  const [limit, SetLimit] = useState(8);

  console.log(data);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
    );
    // console.log(response.data);
    SetData(response.data);
  };

  useEffect(() => {
    getData();
  }, [limit, page]);

  return (
    <div className="h-screen flex flex-col justify-between text-white w-[100%]">
      <Navbar />
      {/* main Section Images  */}
      <div className="bg-[#1E293C] h-300 overflow-y-scroll ponka pt-3 flex flex-wrap items-center justify-center gap-10 scrollbar-none">
        {data.length > 0 ? (
          data.map((item, id) => <Gallery item={item} key={id} />)
        ) : (
          <p className="text-3xl text-center m-4 italic font-bold text-white">
            Loading...
          </p>
        )}
      </div>

      <Footer SetPage={SetPage} SetLimit={SetLimit} />
    </div>
  );
};

export default App;
