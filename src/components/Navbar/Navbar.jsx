import { Select } from "@mantine/core";
import { Switch } from "@mantine/core";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <Select
        variant="unstyled"
        placeholder="Pick value"
        data={["Serif", "Angular", "Vue", "Svelte"]}
        defaultValue="Serif"
      />
      <div className={styles.line}></div>
      <Switch color="grape" />
    </nav>
  );
};

export default Navbar;
