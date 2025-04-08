import { useDispatch, useSelector } from "react-redux";
import { apiLogoutUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import style from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  const onLogout = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <div>
      <span className={style.text_user}>Hello, {userData.email}</span>
      <button className={style.button_user} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
