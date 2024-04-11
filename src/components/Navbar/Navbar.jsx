import { Select } from "@mantine/core";
import { Switch } from "@mantine/core";
import { IconBook, IconSun, IconMoon } from "@tabler/icons-react";
import { useMantineColorScheme } from "@mantine/core";

import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = ({ setSearchInput, setFontSelected }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [font, setFont] = useState("Serif");

  function handleFonts(value) {
    setFont(value);
    setFontSelected(value);
  }

  return (
    <nav className={styles.menu}>
      <IconBook onClick={() => setSearchInput("")} className={styles.logo} />
      <div className={styles.menuRight}>
        <Select
          variant="unstyled"
          data={["Serif", "Sans", "Mono"]}
          value={font}
          onChange={handleFonts}
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
