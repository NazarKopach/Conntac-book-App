import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import style from "../../components/Navigation/Navigation.module.css";
const buildCssClasses = ({ isActive }) =>
  clsx(style.link, isActive && style.active);
import { selectUserIsLoggedIn } from "../../redux/auth/selectors";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  return (
    <nav>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildCssClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
