import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import ThemeToggle from "./features/theme/components/ThemeToggle";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    </>
  );
}

export default App;
