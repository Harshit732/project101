import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "./Card";

function Content2() {
  const [veggie, setVeggie] = useState([]);

  //use effect is used here to run getveggie as soon as the componets get mounted
  useEffect(() => {
    getVeggie();
  }, []);

  //empty array is created to accomodate the functions when it gets mounted

  const getVeggie = async function () {
    const check = localStorage.getItem("veggie");

    //in the local storage one can only save data as string.
    if (check) {
      setVeggie(JSON.parse(check));
      //when you are geting the item to array in veggie we are parsing it back from string
    } else {
      //if nothing in the memory then, setting and fetching the api
      const raw = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9`
      );
      const data = await raw.json();

      //below storing the data in local storage in string form
      localStorage.setItem("veggie", JSON.stringify(data.recipes));

      setVeggie(data.recipes);
    }
  };

  return (
    <>
      <div className="mx-16 my-4">
        <h3>Veggie picks</h3>
        <Splide
          options={{
            perPage: 3,
            breakpoints: {
              1200: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              576: {
                perPage: 1,
              },
            },
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {veggie.map((recipes) => {
            return (
              <SplideSlide key={recipes.id}>
                <Card recipes={recipes} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}

export default Content2;
