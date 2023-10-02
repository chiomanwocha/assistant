import { useSelector } from "react-redux";

const usePhoneticsText = () => {
    // Destructured global state
    const { wordData } = useSelector((state) => state.app);
    // Selecting interested Object from API response Array
    const word = wordData[0];
    // Mapping through phonetics, setting all text to an array and setting empty texts to ""
    const phoneticsTextArray = word.phonetics.map((item) => item.text || "");
    // removing empty texts from array
    const filterPhoneticsTextArray = phoneticsTextArray.filter(
        (item) => item !== ""
    );
    // Removing duplicate texts
    const uniquePhoneticsTextArray = Array.from(
        new Set(filterPhoneticsTextArray)
    );
    // Returning and joining texts with ","
    const phoneticsText = uniquePhoneticsTextArray
        .map((item) => item)
        .join(" or ");
  return (
    phoneticsText
  )
}

export default usePhoneticsText
