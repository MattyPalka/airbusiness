import { useParams } from "react-router-dom";
import { useBusinessDetails } from "../api-service/useBusinessDetails";

export const Business = () => {
  const { id } = useParams();

  const { isLoading, error, data: business } = useBusinessDetails(id);
  return (
    <div>
      {!!error && "error"}
      {isLoading ? (
        "Loading"
      ) : (
        <div>
          <div>{business?.name}</div>
          <div>{business?.display_phone}</div>
        </div>
      )}
    </div>
  );
};
