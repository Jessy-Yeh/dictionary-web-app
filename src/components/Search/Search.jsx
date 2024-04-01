import { Autocomplete, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import styles from "./Search.module.css";

const Search = () => {
  return (
    <>
      <Autocomplete
        variant="filled"
        placeholder="Search"
        rightSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
            className={styles.icon}
          />
        }
        classNames={{ root: styles.search, inner: styles.searchInput }}
        radius="md"
      />
    </>
  );
};

export default Search;
