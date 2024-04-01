import { Autocomplete, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import styles from "./Search.module.css";

const Search = () => {
  return (
    <Autocomplete
      className={styles.search}
      placeholder="Search"
      leftSection={
        <IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
      }
      data={[
        "React",
        "Angular",
        "Vue",
        "Next.js",
        "Riot.js",
        "Svelte",
        "Blitz.js",
      ]}
      visibleFrom="xs"
    />
  );
};

export default Search;
