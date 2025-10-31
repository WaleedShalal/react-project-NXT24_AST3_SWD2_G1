import { Outlet } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import TheHeader from "../../components/TheHeader/TheHeader";
import TheFooter from "./../../components/TheFooter/TheFooter";

import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <TheHeader />
      <main>
        <Outlet />
      </main>
      <ErrorBoundary fallback={<div>Something went wrong ❌❌</div>}>
        <TheFooter />
      </ErrorBoundary>
    </div>
  );
}
