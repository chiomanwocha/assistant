import { setFormWord, setSearchWord } from "../../../store/stateSlice";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../../style";

const Synonyms = ({ item }) => {
    // Destructured global state
    const { darkMode } = useSelector((state) => state.app);
    //  Theme ternary
    const mode = darkMode ? theme.dark : theme.light; const dispatch = useDispatch();

    return (
        <>
            {item.length > 0 && (
                <div className="flex gap-2 items-start">
                    <p className={"text-[13px] xs:text-[16px] sm:text-[18px] " + mode.textSide}>Synonyms: </p>
                    <span className={`text-purple font-[700] text-[12px] xs:text-[16px] sm:text-[18px] `}>
                        {item.map((synonym, index) => (
                            <span
                                className="cursor-pointer hover:underline"
                                onClick={() => {
                                    // Setting synonyms to formWord and searchWord
                                    dispatch(setSearchWord(synonym));
                                    dispatch(setFormWord(synonym));
                                }}
                                key={index}
                            >
                                {synonym}
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

export default Synonyms
