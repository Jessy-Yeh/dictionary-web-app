import { useState } from "react";

import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import ResultDisplay from "../ResultDisplay/ResultDisplay";

function Home() {
  const [fontSelected, setFontSelected] = useState("");

  return (
    <div
      className={`container ${fontSelected !== "" ? fontSelected : "Serif"}`}
    >
      <Navbar setFontSelected={setFontSelected} />
      <Search />
      <ResultDisplay />
    </div>
  );
}

export default Home;
