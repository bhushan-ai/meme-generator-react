import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "./Text.jsx";
import domtoimage from "dom-to-image-more";
import download from "downloadjs";

function EditPage() {
  const myref = useRef();
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const addText = () => {
    setCount(count + 1);
  };

  const saveimg = () => {
    const node = myref.current;
    if (!node) return;
    domtoimage.toJpeg(node).then((dataurl) => download(dataurl, "meme.jpeg"));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold m-5"> Edit the meme</h1>
      <div ref={myref} className="w-fit border-1 m-1 ">
        <img
          className="h-[300px] object-cover"
          src={params.get("url")}
          alt="Card Image"
        />
        {Array(count)
          .fill(0)
          .map((__, index) => (
            <Text key={index} />
          ))}
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 m-2 rounded-lg transition"
        onClick={addText}
      >
        Add Text
      </button>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition"
        onClick={saveimg}
      >
        Save
      </button>
    </div>
  );
}

export default EditPage;
