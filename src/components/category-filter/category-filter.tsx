import { categories } from "../../api-service/useSearchBusinesses";
import { FilterIcon } from "./components/filter-icon";

export const CategoryFilter = () => {
  return (
    <div className="flex gap-8 justify-center">
      {categories.map((category) => (
        <FilterIcon categoryType={category} key={category} />
      ))}
    </div>
  );
};
