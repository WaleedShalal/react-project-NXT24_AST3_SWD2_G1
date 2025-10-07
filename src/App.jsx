import TheHeader from "./components/TheHeader/TheHeader";
import TheFooter from "./components/TheFooter/TheFooter";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <TheHeader></TheHeader> */}
      <TheHeader />
      <h1>Hello From App Component</h1>
      {/* <TheFooter></TheFooter> */}
      <TheFooter />
    </div>
  );
}

export default App;
