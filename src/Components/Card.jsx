import React from "react";
import { Link } from "react-router-dom";
function Card({ recipes }) {
  return (
    <>
      
      <div className="w-[250px] rounded-md border">
        <img
          src={recipes.image}
          alt={recipes.tittle}
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{recipes.tittle}</h1>
          <p className="mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          
          <Link to={"/popup/"+recipes.id}>
          <button
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button>
          
          </Link>
        
        </div>
      </div>
    </>
  );
}

export default Card;


