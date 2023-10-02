import React, { useRef, useState, useEffect } from 'react'; // Import useEffect and useState
import { useDispatch } from 'react-redux'; // Import useDispatch for dispatching actions
import { setMessage, setPosition, setDisplay } from '../store/stateSlice';

const CursorToolTip = ({ children, title }) => {
    const toolTipRef = useRef();
    const container = useRef();
    const dispatch = useDispatch(); // Get the dispatch function

    const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0, right: 0, bottom: 0 });


    useEffect(() => {
        // Dispatch the setPosition action with the tooltipPosition
        dispatch(setPosition(tooltipPosition));
    }, [dispatch, tooltipPosition]); // Add dispatch and tooltipPosition to the dependency array

    return (
        <div
            ref={container}
            onClick={(event) => {
                if (!toolTipRef.current || !container.current) return;
                const containerRect = container.current.getBoundingClientRect();
                const spanRect = toolTipRef.current.getBoundingClientRect();
                const { clientX, clientY } = event;

                const position = {
                    left: clientX - spanRect.width / 2 + "px",
                    top: clientY - spanRect.height + "px",
                    right: clientX + spanRect.width / 2 + "px",
                    bottom: clientY + "px",
                };
                setTooltipPosition(position);
                dispatch(setMessage(title))
                dispatch(setDisplay(true))
            }}
        >
            {children}
            {/* Add content for your tooltip here */}
            <span ref={toolTipRef}
                className="invisible group-hover:visible w-auto flex-wrap z-[10] opacity-0 group-hover:opacity-0 transition bg-purple text-white p-1 mt-2 rounded absolute whitespace-nowrap"
            >
            </span>
        </div>
    );
};

export default CursorToolTip;
