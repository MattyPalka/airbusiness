import { useTranslation } from "react-i18next";
import {
  categories,
  SearchParams,
} from "../../api-service/useSearchBusinesses";
import { Icon } from "../icon";
import { FilterIcon } from "./components/filter-icon";
import { useState } from "react";
import clsx from "clsx";

interface Props {
  applyFilters: (filters: SearchParams) => void;
}

export const CategoryFilter = ({ applyFilters }: Props) => {
  const { t } = useTranslation("translation");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [locationValue, setLocationValue] = useState("");
  return (
    <>
      <div className="grid grid-cols-[1fr,_auto]">
        <div className="flex gap-8 justify-center">
          {categories.map((category) => (
            <FilterIcon categoryType={category} key={category} />
          ))}
        </div>
        <button
          onClick={() => {
            setIsFilterOpen((prev) => !prev);
          }}
          className="flex gap-2 text-xs justify-center items-center hover:text-gray-700 text-gray-500 "
        >
          <Icon icon="Filter" className="w-6 h-6" />
          {t("translation:filters")}
        </button>
      </div>
      <div
        id="drawer-contact"
        className={clsx(
          isFilterOpen ? "" : "-translate-x-full",
          "fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform  bg-white w-80 drop-shadow-2xl shadow-2xl"
        )}
        tabIndex={-1}
        aria-labelledby="drawer-contact-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase"
        >
          <Icon icon="Filter" className="w-4 h-3" />
          {t("translation:filters")}
        </h5>
        <button
          type="button"
          onClick={() => {
            setIsFilterOpen(false);
          }}
          data-drawer-hide="drawer-contact"
          aria-controls="drawer-contact"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center "
        >
          <Icon icon="Cross" className="w-4 h-4" />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="mb-6">
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {t("translation:location")}
          </label>
          <input
            value={locationValue}
            onChange={(e) => {
              setLocationValue(e.currentTarget.value);
            }}
            type="text"
            id="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Warszawa, Polska"
            required
          />
        </div>
        <button
          onClick={() => {
            applyFilters({ location: locationValue });
            setIsFilterOpen(false);
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2  block"
        >
          {t("translation:filter_cta")}
        </button>
      </div>
    </>
  );
};
