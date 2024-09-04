import React, { useState, useEffect } from "react";

const mystyle = {
  backgroundColor: "#f97316",
  width: "25rem",
  height: "25rem",
  
};
const stylebox={
  padding: "1rem",
  borderRadius: "8px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

function Box({ flag, boxno }) {
  const [visibility, setVisibility] = useState(["hidden", "hidden", "hidden"]);

  useEffect(() => {
    console.log("useEffect triggered with", { boxno, flag });

    let newVisibility = ["hidden", "hidden", "hidden"];

    // Update the specific index based on boxno
    if (flag) {
      newVisibility[boxno - 1] = "visible";
    }
    console.log(newVisibility);

    setVisibility(newVisibility);
  }, [boxno, flag]); // The effect runs when `flag boxno` changes

  function closebutton() {
    setVisibility(["hidden", "hidden", "hidden"]);
  }

  return (
    <div className="flex justify-end mx-auto max-w-7xl items-center px-4 sm:px-6 lg:px-8">
      <div className={visibility[0]} style={mystyle}>
        <div style={stylebox}>
        <h1 className="text-2xl font-bold">Cuisine</h1>
        <p>
          Discover a variety of delicious recipes from around the world. Whether
          you're in the mood for Italian pasta, spicy Indian curries, or classic
          American burgers, we've got something for every taste!
        </p>
        <button
          onClick={closebutton}
          type="button"
          className="text-white my-20 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          close
        </button>
        </div>
      </div>

      <div className={visibility[1]} style={mystyle}>
        <div style={stylebox}>
        <h1 className="text-2xl font-bold">About Us</h1>
        <p>
          We are passionate about bringing you the best content and experiences.
          Our team works tirelessly to ensure you get the latest trends,
          updates, and tips in the culinary world.
        </p>
        <button
          onClick={closebutton}
          type="button"
          className="text-white my-20 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          close
        </button>
        </div>
      </div>

      <div className={visibility[2]} style={mystyle}>
        <div style={stylebox}>
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p>
          Have questions or feedback? Reach out to us through our contact form,
          email, or social media. We love hearing from our community and are
          here to help with any inquiries.
        </p>
        <button
          onClick={closebutton}
          type="button"
          className="text-white my-20 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Close
        </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
