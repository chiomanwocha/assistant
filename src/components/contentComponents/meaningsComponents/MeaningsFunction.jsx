import { useSelector } from "react-redux";

const MeaningsFunction = () => {
  // Destructured global state
  const { wordData } = useSelector((state) => state.app);
  // Selecting interested Object from API response Array
  const word = wordData[0];
  // Mapping through meanings, setting meanings to an array and setting empty meanings to ""
  const meanings = word.meanings.map((item) => (item.partOfSpeech ? item : ""));
  // Removing empty meanings from array
  const newMeanings = meanings.filter((item) => item !== "");
  // Mapping through meanings
  return newMeanings;
};

export default MeaningsFunction;
