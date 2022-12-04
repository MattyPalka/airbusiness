import { useEffect, useState } from "react";
import { Business, mockApiResponse } from "./api-service/mock-business";
import { CategoryFilter } from "./components/category-filter";
import { Tile } from "./components/tile";
import { YELP_API_KEY } from "./yelp-api-key";

function App() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };

  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Poland&sort_by=best_match&limit=20",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setBusinesses(response.businesses);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <CategoryFilter />
      <div className="grid grid-cols-12 p-4 gap-4">
        {businesses.map((business) => (
          <Tile businessDetails={business} key={business.id} />
        ))}
      </div>
    </>
  );
}

export default App;
