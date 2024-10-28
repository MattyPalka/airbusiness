import { Link } from "react-router-dom";
import { Icon } from "../icon";

export const Navbar = () => {
  return (
    <div className="flex gap-4">
      <Link to="/" className="flex gap-1 hover:underline">
        <Icon icon="Wind" />
        AirBusiness
      </Link>
    </div>
  );
};
