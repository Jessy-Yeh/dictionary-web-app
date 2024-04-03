import styles from "./MeaningData.module.css";

const MeaningData = ({ meaning }) => {
  return (
    <>
      <div className={styles[`partOfSpeech-container`]}>
        <p>{meaning.partOfSpeech}</p>
        <div className={styles.line}></div>
      </div>
      <h2>Meaning</h2>
      {meaning.definitions.map((definition, index) => {
        return (
          <li key={index}>
            <p>{definition.definition}</p>
          </li>
        );
      })}
      {meaning.synonyms
        ? meaning.synonyms.map((synonym, index) => <p key={index}>{synonym}</p>)
        : null}
    </>
  );
};

export default MeaningData;
