import { useEffect, useState } from "react";
import { useSearchBusinesses } from "../api-service/useSearchBusinesses";
import { Business } from "../api-service/mock-business";
import { CategoryFilter } from "../components/category-filter";
import { Tile } from "../components/tile";

export const Home = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  const { isLoading, error, data } = useSearchBusinesses();

  useEffect(() => {
    data && setBusinesses(data.businesses);
  }, [data]);

  return (
    <>
      <CategoryFilter />
      <div className="grid grid-cols-12 p-4 gap-4">
        <>
          {isLoading && "Loading"}
          {error && "error"}
          {businesses.map((business) => (
            <Tile businessDetails={business} key={business.id} />
          ))}
        </>
      </div>
    </>
  );
};
