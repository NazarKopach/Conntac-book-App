import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectUserIsLoggedIn } from "../../redux/auth/selectors";
import style from "./AppBar.module.css";
import BtnTema from "../BtnTema/BtnTema";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <header className={style.app_bar_header}>
      <Navigation />
      {isLoggedIn && <BtnTema />}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
