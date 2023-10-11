import "./App.css";
import EuiRootComponent from "./EuiComponent";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <AppProvider>
      <EuiRootComponent />
    </AppProvider>
  );
}

export default App;
