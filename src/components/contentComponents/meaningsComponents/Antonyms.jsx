import { setFormWord, setSearchWord } from "../../../store/stateSlice";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../../style";

const Antonyms = ({ item }) => {
    // Destructured global state
    const { darkMode } = useSelector((state) => state.app);
    //  Theme ternary
    const mode = darkMode ? theme.dark : theme.light; const dispatch = useDispatch();

    return (
        <>
            {item.length > 0 && (
                <div className="flex gap-2 items-start">
                    <p className={"text-[13px] xs:text-[16px] sm:text-[18px] " + mode.textSide}>Antonyms: </p>
                    <span className={`text-purple font-[700] text-[12px] xs:text-[16px] sm:text-[18px] `}>
                        {item.map((antonym, index) => (
                            <span
                                className="cursor-pointer hover:underline"
                                onClick={() => {
                                    // Setting synonyms to formWord and searchWord
                                    dispatch(setSearchWord(antonym));
                                    dispatch(setFormWord(antonym));
                                }}
                                key={index}
                            >
                                {antonym}
                                {index < item.length - 1 && ", "}
                            </span>
                        ))}
                        .
                    </span>
                </div>
            )}
        </>
    )
}

export default Antonyms
