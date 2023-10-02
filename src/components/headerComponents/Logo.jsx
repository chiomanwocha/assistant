import CursorToolTip from "../CursorToolTip";
import ToolTip from "../ToolTip";

const Logo = () => {
  return (
    <CursorToolTip title="This is the logo">
      <ToolTip title="This is the logo">
        <div className="w-[5vw]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStr8r7MkVyBhospr1b0oUsU0W9nmAgXqTAjw&usqp=CAU"
            alt="logo"
          />
        </div>
      </ToolTip>
    </CursorToolTip>
  );
};

export default Logo;
