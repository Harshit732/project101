import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "./Card";


function Content() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const raw = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9`
      );
      const data = await raw.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <>
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-4">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Popular Picks
        </h3>
        <Splide
          options={{
            perPage: 4,
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
          {popular.map((recipes) => (
            <SplideSlide key={recipes.id}>
              <Card recipes={recipes} />
              
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}

export default Content;
