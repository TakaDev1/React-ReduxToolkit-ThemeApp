import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import ThemeToggle from "./features/theme/components/ThemeToggle";
import DisplayTheme from "./features/theme/components/DisplayTheme";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-500 flex flex-col justify-center items-center">
        <h1>React-ReduxToolkit-ThemeApp</h1>
        <Provider store={store}>
          <DisplayTheme />
          <ThemeToggle />
        </Provider>
      </div>
    </>
  );
}

export default App;
