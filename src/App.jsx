import { RouterProvider } from "react-router/dom";
import { Provider } from "react-redux";
import UserProvider from "./contexts/User/UserProvider";

import router from "./routes/routes";
import store from "./store/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <RouterProvider router={router} />;
      </UserProvider>
    </Provider>
  );
}

export default App;
