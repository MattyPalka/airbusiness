import { mockApiResponse } from "./api-service/mock-business";
import { Icon } from "./components/icon";
import { Tile } from "./components/tile";

function App() {
  return (
    <div className="grid grid-cols-12 p-4 gap-4">
      {mockApiResponse.map((business) => (
        <Tile businessDetails={business} key={business.id} />
      ))}
    </div>
  );
}

export default App;
