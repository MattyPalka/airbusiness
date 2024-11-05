import { Link } from "react-router-dom";
import { Icon } from "../icon";

export const Navbar = () => {
  return (
    <div className="flex gap-4 border-b border-gray-300 border-solid pb-4 px-4">
      <Link to="/" className="flex gap-1 hover:text-gray-900 text-slate-700">
        <Icon icon="Wind" />
        AirBusiness
      </Link>
    </div>
  );
};
