import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import ThemeToggle from "./features/theme/components/ThemeToggle";
import DisplayTheme from "./features/theme/components/DisplayTheme";

function App() {
  return (
    <>
      <Provider store={store}>
        <DisplayTheme />
        <ThemeToggle />
      </Provider>
    </>
  );
}

export default App;
