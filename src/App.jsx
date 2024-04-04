import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`container ${isDarkMode ? `darkMode` : ""}`}>
      <MantineProvider>
        <Navbar
          setSearchInput={setSearchInput}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <Search setSearchInput={setSearchInput} />
        <ResultDisplay searchInput={searchInput} isDarkMode={isDarkMode} />
      </MantineProvider>
    </div>
  );
}

export default App;
