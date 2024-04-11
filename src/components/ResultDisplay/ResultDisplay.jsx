import { useState, useEffect } from "react";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

import MeaningData from "../MeaningData/MeaningData";
import styles from "./ResultDisplay.module.css";
import bookReading from "/book-reading.svg";
import noResult from "/no-result.svg";

const ResultDisplay = ({ searchInput }) => {
  const [wordData, setWordData] = useState({});
  const [isSearchNotFound, setIsSearchNotFoud] = useState(false);
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`;
  const audio = new Audio(
    `${
      wordData?.phonetics?.find((phonetic) => phonetic.audio?.length > 0)?.audio
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
      if (res.status === 404) {
        setIsSearchNotFoud(true);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (searchInput) {
      fetchWordData(url);
    } else {
      setWordData({});
    }
  }, [searchInput, url]);

  return (
    <>
      {wordData?.word?.length > 0 ? (
        <div>
          <div className={styles[`word-container`]}>
            <div>
              <h1 className={styles.word}>{wordData.word}</h1>
              <p className={styles.symbol}>
                {
                  wordData?.phonetics?.find(
                    (phonetic) => phonetic.text?.length > 0
                  ).text
                }
              </p>
            </div>
            <button className={styles.playButton} onClick={playAudio}>
              <IconPlayerPlayFilled className={styles.playIcon} />
            </button>
          </div>

          {wordData?.meanings?.map((meaning, index) => {
            return (
              <div key={index}>
                <MeaningData meaning={meaning} />
              </div>
            );
          })}

          <div className={styles.line}></div>
          <div className={styles[`source-container`]}>
            <p>Source</p>
            <a
              href={`https://en.wiktionary.org/wiki/${wordData.word}`}
              target="_blank"
            >
              https://en.wiktionary.org/wiki/{wordData.word}
            </a>
          </div>
        </div>
      ) : isSearchNotFound ? (
        <div className={styles[`search-error-page`]}>
          <img src={noResult} />
          <p>Ooops! Nothing Found</p>
        </div>
      ) : (
        <div className={styles[`main-page`]}>
          <img src={bookReading} />
          <p>Search Something...</p>
        </div>
      )}
    </>
  );
};

export default ResultDisplay;
