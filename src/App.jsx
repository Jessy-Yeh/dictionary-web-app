import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [fontSelected, setFontSelected] = useState("");

  return (
    <div
      className={`container ${fontSelected !== "" ? fontSelected : "Serif"}`}
    >
      <MantineProvider>
        <Navbar
          setSearchInput={setSearchInput}
          setFontSelected={setFontSelected}
        />
        <Search setSearchInput={setSearchInput} />
        <ResultDisplay
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </MantineProvider>
    </div>
  );
}

export default App;
