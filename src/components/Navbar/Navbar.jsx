import { Select } from "@mantine/core";
import { Switch } from "@mantine/core";
import { IconBook } from "@tabler/icons-react";

import styles from "./Navbar.module.css";

const Navbar = ({ setSearchInput, isDarkMode, setIsDarkMode }) => {
  return (
    <nav className={styles.menu}>
      <IconBook onClick={() => setSearchInput("")} className={styles.logo} />
      <div className={styles.menuRight}>
        <Select
          variant="unstyled"
          placeholder="Pick value"
          data={["Serif", "Angular", "Vue", "Svelte"]}
          defaultValue="Serif"
          classNames={isDarkMode ? { input: styles.dropDown } : ""}
        />
        <div className={styles.line}></div>
        <Switch
          color="grape"
          checked={isDarkMode}
          onChange={() => setIsDarkMode((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
