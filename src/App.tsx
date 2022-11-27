import { mockApiResponse } from "./api-service/mock-business";
import { CategoryFilter } from "./components/category-filter";
import { Tile } from "./components/tile";

function App() {
  return (
    <>
      <CategoryFilter />
      <div className="grid grid-cols-12 p-4 gap-4">
        {mockApiResponse.map((business) => (
          <Tile businessDetails={business} key={business.id} />
        ))}
      </div>
    </>
  );
}

export default App;
