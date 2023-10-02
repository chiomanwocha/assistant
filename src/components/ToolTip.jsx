/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHovering, setPosition, setMessage, setDisplay } from "../store/stateSlice";

const ToolTip = ({ children, title }) => {
  const { hover } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0, right: 0, bottom: 0 });

  useEffect(() => {
    if (hover) {
      dispatch(setPosition(tooltipPosition));
    }
  }, [tooltipPosition]);

  const toolTipRef = useRef();
  const container = useRef();

  const handleMouseEnter = (event) => {
    if (!hover || !toolTipRef.current || !container.current) return;

    dispatch(setHovering(true));
    dispatch(setDisplay(false));
    dispatch(setMessage(title));

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
  };

  const handleMouseLeave = () => {
    if (hover) {
      setTooltipPosition({});
      dispatch(setHovering(false));
      dispatch(setMessage(''));
      dispatch(setDisplay(false));
    }
  };

  return (
    <div
      ref={container}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="group relative inline-block"
    >
      {children}
      {hover && (
        <span
          ref={toolTipRef}
          className="invisible group-hover:visible w-auto flex-wrap z-[10] opacity-0 group-hover:opacity-0 transition bg-purple text-white p-1 mt-2 rounded absolute whitespace-nowrap"
        >
        </span>
      )}
    </div>
  );
};

export default ToolTip;
