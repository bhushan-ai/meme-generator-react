import React from "react";
import { useNavigate } from "react-router-dom";

function MemeCard(props) {
  const navigate = useNavigate();
  return (
    <div className="max-w-sm h-fit mx-auto bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
      <img className="h-fit object-cover" src={props.image} alt="Card Image" />

      <div className="p-4">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">{props.title}</h2>

        <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition" onClick={()=>navigate(`/edit?url=${props.image}`)}>
            Edit
          </button>
          {/* <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition">
            Save
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default MemeCard;
