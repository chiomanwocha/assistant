import SubMeaning from "./meaningsComponents/SubMeaning";
import MainMeaning from "./meaningsComponents/MainMeaning";
import MeaningsFunction from "./meaningsComponents/MeaningsFunction";

const Meanings = () => {
  const newMeanings = MeaningsFunction()
  const meaning = newMeanings.map((item, index) => {
    // Mapping through each meaning
    const subMeaning = item.definitions.map((item, index) => {
      // Returning subMeaning
      return <SubMeaning key={index} item={item} />;
    });
    // Returning meaning
    return <MainMeaning key={index} item={item} subMeaning={subMeaning} />;
  });

  // Render Meaning
  return <div title="This is the word's meaning" className="flex flex-col gap-5 xs:gap-8 sm:gap-12 mb-12">{meaning}</div>
};

export default Meanings;
