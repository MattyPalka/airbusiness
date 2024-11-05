import { useParams } from "react-router-dom";
import { useBusinessDetails } from "../api-service/useBusinessDetails";
import { InfoText } from "../components/info-text";

export const Business = () => {
  const { id } = useParams();

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
          <div>photo</div>
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
            <div>contact</div>
          </div>
          <div>map</div>
        </div>
      )}
    </div>
  );
};
