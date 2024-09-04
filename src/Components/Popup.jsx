import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Popup() {
  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="flex items-center justify-center md:p-6 lg:p-8 bg-white shadow-lg rounded-lg border-solid border-2 border-gray-300" style={{ margin: '3rem 10%', top:"2rem", position:"fixed" }}>
      <div className="flex flex-col items-center mb-2 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">{details.title}</h2>
        <img
          src={details.image}
          alt={details.title}
          className="w-full max-w-md rounded-lg shadow-md"
        />
        <Link to={"/"}>
          <button className="m-4 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-black transition duration-200">
            Close
          </button>
        </Link>
      </div>

      <div className="w-full">
        
        <div className="text-sm text-gray-700">
          <h2 className="text-lg font-medium">Summary</h2>
          <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
        </div>
        <div className="mt-2">
          <h2 className="text-lg font-bold mb-2">Ingredients</h2>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            {details.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id} className="mb-1">
                {ingredient.original}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Popup;
