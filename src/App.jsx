import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <MantineProvider>
      <Navbar />
    </MantineProvider>
  );
}

export default App;
