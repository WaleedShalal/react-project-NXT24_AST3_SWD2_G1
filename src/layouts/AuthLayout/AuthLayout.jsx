import { Outlet } from "react-router";

import TheFooter from "../../components/TheFooter/TheFooter";

import "./AuthLayout.css";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <main>
        <Outlet />
      </main>
      <TheFooter />
    </div>
  );
}
