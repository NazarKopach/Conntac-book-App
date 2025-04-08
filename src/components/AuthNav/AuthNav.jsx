import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "../../components/Navigation/Navigation.module.css";
const buildCssClasses = ({ isActive }) =>
  clsx(style.link, isActive && style.active);

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={buildCssClasses} to="/register">
        Register
      </NavLink>
      <NavLink className={buildCssClasses} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
