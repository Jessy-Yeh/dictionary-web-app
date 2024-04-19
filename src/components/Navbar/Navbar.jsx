import { Select, Switch } from "@mantine/core";
import { IconBook, IconSun, IconMoon } from "@tabler/icons-react";
import { useMantineColorScheme } from "@mantine/core";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = ({ setFontSelected }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [font, setFont] = useState("Serif");

  function handleFonts(value) {
    setFont(value);
    setFontSelected(value);
  }

  return (
    <nav className={styles.menu}>
      <Link to="/">
        <IconBook className={styles.logo} />
      </Link>

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
