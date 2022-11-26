import { mockApiResponse } from "./api-service/mock-business";
import { FilterIcon } from "./components/filter-icon";
import { Tile } from "./components/tile";

function App() {
  return (
    <>
      <div className="flex gap-2 p-2">
        <FilterIcon icon="Car" displayName="Motoryzacja" categoryType="auto" />
        <FilterIcon icon="Paw" displayName="Zwierzęta" categoryType="pets" />
        <FilterIcon
          icon="Ambulance"
          displayName="Zdrowe"
          categoryType="health"
        />
      </div>
      <div className="grid grid-cols-12 p-4 gap-4">
        {mockApiResponse.map((business) => (
          <Tile businessDetails={business} key={business.id} />
        ))}
      </div>
    </>
  );
}

export default App;
