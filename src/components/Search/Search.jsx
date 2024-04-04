import { TextInput, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

import styles from "./Search.module.css";

const Search = ({ setSearchInput }) => {
  const [inputText, setInputText] = useState("");
  function handleChange(e) {
    setInputText(e.target.value);
  }

  function searchWord() {
    setSearchInput(inputText);
    setInputText("");
  }

  function handleKeyUp(e) {
    if (e.key === "Enter") {
      searchWord();
    }
  }

  return (
    <>
      <TextInput
        variant="filled"
        placeholder="Search"
        rightSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
            className={styles.icon}
            onClick={searchWord}
          />
        }
        classNames={{ root: styles.search }}
        radius="md"
        value={inputText}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </>
  );
};

export default Search;
