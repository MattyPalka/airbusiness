import { useParams } from "react-router-dom";
import { useBusinessDetails } from "../api-service/useBusinessDetails";
import { InfoText } from "../components/info-text";
import { PhotoGrid } from "../components/photo-grid/photo-grid";
import { useTranslation } from "react-i18next";

export const Business = () => {
  const { id } = useParams();
  const { t } = useTranslation("translation");

  const { isLoading, error, isError, data: business } = useBusinessDetails(id);
  return (
    <div>
      {isError && error.message}
      {isLoading ? (
        "Loading"
      ) : (
        <div className="flex flex-col gap-4 w-full">
          <div>
            <h6 className="font-semibold text-xl">{business?.name}</h6>
          </div>
          <PhotoGrid images={business?.photos || []} />
          <div className="grid grid-cols-[3fr,_1fr]">
            <div className="flex flex-col">
              <span className="font-semibold text-md">
                {business?.location.address1}, {business?.location.city}
              </span>
              <InfoText>
                {business?.categories.map((category, i) => (
                  <span key={category.alias}>
                    {category.title}
                    {i + 1 < business?.categories.length && ", "}
                  </span>
                ))}
              </InfoText>
            </div>
            <div className="w-full border-solid border border-gray-400 rounded-md p-4 shadow bg-slate-100 flex justify-center flex-col gap-2 items-center">
              <InfoText>{business?.phone}</InfoText>
              <a
                href={`tel:${business?.phone}`}
                className="text-xl bg-green-400 px-4 py-2 rounded-md w-full text-center cursor-pointer hover:bg-green-500 ease-in-out transition duration-300"
              >
                {t("translation:call")}
              </a>
            </div>
          </div>
          <div>map</div>
        </div>
      )}
    </div>
  );
};
