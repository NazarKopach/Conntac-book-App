import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
};
