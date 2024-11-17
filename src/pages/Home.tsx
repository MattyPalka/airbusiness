import { useEffect, useState } from "react";
import {
  DEFAULT_LIMIT,
  isCategory,
  SearchParams,
  useSearchBusinesses,
} from "../api-service/useSearchBusinesses";
import { Business } from "../api-service/mock-business";
import { CategoryFilter } from "../components/category-filter";
import { Tile } from "../components/tile";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../components/pagination/pagination";

export const Home = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(0);
  const category = searchParams.get("category");
  const [locationValue, setLocationValue] = useState<string>();

  const { isLoading, error, data } = useSearchBusinesses({
    categories: isCategory(category) ? category : undefined,
    offset: page * DEFAULT_LIMIT,
    location: locationValue,
  });

  useEffect(() => {
    data && setBusinesses(data.businesses);
  }, [data]);

  const numOfPages = Math.floor((data?.total || 0) / DEFAULT_LIMIT);

  return (
    <div className="flex flex-col gap-4">
      <CategoryFilter
        applyFilters={({ location }) => {
          location && setLocationValue(location);
        }}
      />
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-4">
        <>
          {isLoading && "Loading"}
          {error && "error"}
          {!isLoading &&
            businesses.map((business) => (
              <Tile businessDetails={business} key={business.id} />
            ))}
        </>
      </div>
      {data && (
        <Pagination
          onPageChanged={setPage}
          numOfPages={numOfPages}
          currentPage={page}
        />
      )}
    </div>
  );
};
