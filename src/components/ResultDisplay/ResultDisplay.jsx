import { useState, useEffect } from "react";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

import MeaningData from "../MeaningData/MeaningData";
import styles from "./ResultDisplay.module.css";

const ResultDisplay = ({ searchInput }) => {
  const [wordData, setWordData] = useState({});
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`;
  const audio = new Audio(
    `${
      wordData?.phonetics?.find((phonetic) => phonetic.audio?.length > 0).audio
    }`
  );

  const playAudio = () => {
    audio.play();
  };

  async function fetchWordData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setWordData(data[0]);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (searchInput) {
      fetchWordData(url);
    }
  }, [searchInput, url]);

  return (
    <div>
      <div className={styles[`word-container`]}>
        <div>
          <h1 className={styles.word}>{wordData.word}</h1>
          <p className={styles.symbol}>
            {
              wordData?.phonetics?.find((phonetic) => phonetic.text?.length > 0)
                .text
            }
          </p>
        </div>
        <button className={styles.playButton} onClick={playAudio}>
          <IconPlayerPlayFilled className={styles.playIcon} />
        </button>
      </div>

      {wordData?.meanings?.map((meaning, index) => {
        return (
          <ul key={index}>
            <MeaningData meaning={meaning} />
          </ul>
        );
      })}
    </div>
  );
};

export default ResultDisplay;
