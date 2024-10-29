import { useEffect, useState } from "react";
import {
  isCategory,
  useSearchBusinesses,
} from "../api-service/useSearchBusinesses";
import { Business } from "../api-service/mock-business";
import { CategoryFilter } from "../components/category-filter";
import { Tile } from "../components/tile";
import { useSearchParams } from "react-router-dom";

export const Home = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const { isLoading, error, data } = useSearchBusinesses({
    categories: isCategory(category) ? category : undefined,
  });

  useEffect(() => {
    data && setBusinesses(data.businesses);
  }, [data]);

  return (
    <>
      <CategoryFilter />
      <div className="grid grid-cols-12 gap-4">
        <>
          {isLoading && "Loading"}
          {error && "error"}
          {!isLoading &&
            businesses.map((business) => (
              <Tile businessDetails={business} key={business.id} />
            ))}
        </>
      </div>
    </>
  );
};
