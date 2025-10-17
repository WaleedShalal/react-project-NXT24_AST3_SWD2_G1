import { RouterProvider } from "react-router/dom";

import router from "./routes/routes";

import "./App.css";
import UserProvider from "./contexts/User/UserProvider";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />;
    </UserProvider>
  );
}

export default App;
