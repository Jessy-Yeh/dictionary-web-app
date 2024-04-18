import { useState } from "react";

import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import ResultDisplay from "../ResultDisplay/ResultDisplay";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [fontSelected, setFontSelected] = useState("");

  return (
    <div
      className={`container ${fontSelected !== "" ? fontSelected : "Serif"}`}
    >
      <Navbar
        setSearchInput={setSearchInput}
        setFontSelected={setFontSelected}
      />
      <Search setSearchInput={setSearchInput} />
      <ResultDisplay
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </div>
  );
}

export default Home;
