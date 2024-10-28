import { useParams } from "react-router-dom";

export const Business = () => {
  const { id } = useParams();
  return (
    <div>
      <div>Business {id}</div>
    </div>
  );
};
