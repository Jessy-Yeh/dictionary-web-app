import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="container">
      <MantineProvider>
        <Navbar />
        <Search />
      </MantineProvider>
    </div>
  );
}

export default App;
