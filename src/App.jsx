import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="container">
      <MantineProvider>
        <Navbar />
        <Search setSearchInput={setSearchInput} />
      </MantineProvider>
    </div>
  );
}

export default App;
