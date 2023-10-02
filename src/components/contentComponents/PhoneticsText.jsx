import usePhoneticsText from "./phoneticsComponents/usePhoneticsText";

const PhoneticsText = () => {
  const phoneticsText = usePhoneticsText()

  return (
    // Render PhoneticsTexts
    <p className={`text-purple cursor-pointer text-[18px] sm:text-[24px]`}>{phoneticsText}</p>
  );
};

export default PhoneticsText;
