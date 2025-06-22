import React, { useState, useEffect } from "react";
import MemeCard from "./MemeCard";
import GetAllmemes from "../Api/GetAllmemes";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetAllmemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-2 p-2">
      {data.map((el) => (
        <MemeCard image={el.url} title={el.name} />
      ))}
    </div>
  );
}

export default Home;
