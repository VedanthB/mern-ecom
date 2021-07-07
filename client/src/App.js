import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/headers/Header";
import { DataProvider } from "./GlobalState";
import MainPages from "./components/mainpages/Pages";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <MainPages />
      </Router>
    </DataProvider>
  );
}

export default App;
