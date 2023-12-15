import { Provider } from "react-redux";

import store from "./redux/store";

import HomePage from "./pages/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </>
  );
}

export default App;
