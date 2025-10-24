import { Outlet } from "react-router";

import { Container } from "react-bootstrap";

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
      <TheFooter />
    </div>
  );
}
