import { useState, useEffect } from "react";
import MeaningData from "../MeaningData/MeaningData";
import styles from "./ResultDisplay.module.css";

const ResultDisplay = ({ searchInput }) => {
  const [wordData, setWordData] = useState({});
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`;
  // const audio = new Audio(`${wordData?.phonetics.audio}`);

  // const playAudio = () => {
  //   audio.play();
  // };

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
      <div>
        <div>
          <h1 className={styles.word}>{wordData.word}</h1>
          {/* <p>{wordData?.phonetics[0]?.text}</p> */}
        </div>
        {/* <button onClick={playAudio} /> */}
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
