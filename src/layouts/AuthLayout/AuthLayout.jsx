import { Outlet } from "react-router";

import TheFooter from "../../components/TheFooter/TheFooter";

import "./AuthLayout.css";
import { ErrorBoundary } from "react-error-boundary";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <main>
        <Outlet />
      </main>
      <ErrorBoundary fallback={<div>Something went wrong ❌❌</div>}>
        <TheFooter />
      </ErrorBoundary>{" "}
    </div>
  );
}
