import { Select } from "@mantine/core";
import { Switch } from "@mantine/core";
import { IconBook, IconSun, IconMoon } from "@tabler/icons-react";
import { useMantineColorScheme } from "@mantine/core";

import styles from "./Navbar.module.css";

const Navbar = ({ setSearchInput, isDarkMode }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

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
        <Switch color="grape" onChange={toggleColorScheme} />
        {colorScheme === "dark" ? (
          <IconMoon className={styles.thumbIcon} />
        ) : (
          <IconSun className={styles.thumbIcon} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
