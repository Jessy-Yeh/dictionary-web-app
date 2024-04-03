import styles from "./MeaningData.module.css";

const MeaningData = ({ meaning }) => {
  return (
    <>
      <div className={styles[`partOfSpeech-container`]}>
        <p className={styles.partOfSpeech}>{meaning.partOfSpeech}</p>
        <div className={styles.line}></div>
      </div>
      <h2 className={`${styles.subtitle} ${styles.meaningSubtitle}`}>
        Meaning
      </h2>
      {meaning.definitions.map((definition, index) => {
        return (
          <li className={styles.definition} key={index}>
            <p>{definition.definition}</p>
          </li>
        );
      })}

      {meaning.synonyms.length > 0 ? (
        <div className={styles[`synonyms-main-container`]}>
          <h2 className={styles.subtitle}>Synonyms</h2>
          <ul className={styles[`synonyms-second-container`]}>
            {meaning.synonyms.map((synonym, index) => (
              <li className={styles.synonyms} key={index}>
                {synonym}
                {meaning.synonyms[index + 1] !== undefined ? "," : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default MeaningData;
