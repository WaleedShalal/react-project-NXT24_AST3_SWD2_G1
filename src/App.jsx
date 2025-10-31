import { RouterProvider } from "react-router/dom";
import { Provider } from "react-redux";
import UserProvider from "./contexts/User/UserProvider";

import queryClient from "./services/queryClient";
import router from "./routes/routes";
import store from "./store/store";

import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserProvider>
          <RouterProvider router={router} />;
        </UserProvider>
      </Provider>
      <ReactQueryDevtools position="top" />
    </QueryClientProvider>
  );
}

export default App;
