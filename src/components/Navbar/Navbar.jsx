import { Select } from "@mantine/core";
import { Switch } from "@mantine/core";
import { IconBook } from "@tabler/icons-react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <IconBook />
      <div className={styles.menuRight}>
        <Select
          variant="unstyled"
          placeholder="Pick value"
          data={["Serif", "Angular", "Vue", "Svelte"]}
          defaultValue="Serif"
        />
        <div className={styles.line}></div>
        <Switch color="grape" />
      </div>
    </nav>
  );
};

export default Navbar;
