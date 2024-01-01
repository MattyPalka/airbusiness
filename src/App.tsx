import { useEffect, useState } from "react";
import { Business } from "./api-service/mock-business";
import { CategoryFilter } from "./components/category-filter";
import { Tile } from "./components/tile";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSearchBusinesses } from "./api-service/useSearchBusinesses";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

const Main = () => {
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

export default App;
