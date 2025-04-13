import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserIsRefreshing } from "./redux/auth/selectors";
import { useEffect } from "react";
import { apiGetCurrentUser } from "./redux/auth/operations";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { ToastContainer } from "react-toastify";

import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage.jsx";
import { LoginPage } from "./pages/LoginPage/LoginPage.jsx";
import { ContactsPage } from "./pages/ContactPage/ContactsPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.jsx";

import "./App.css";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  const isRefreshing = useSelector(selectUserIsRefreshing);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    dispatch(apiGetCurrentUser());
  }, [dispatch]);

  if (isRefreshing) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="*"
            element={<RestrictedRoute component={<NotFoundPage />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
        </Routes>
      </Layout>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
