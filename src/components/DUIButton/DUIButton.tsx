import * as React from "react";
import { DUIButtonPropsType } from "../../types/index";
import "../../styles/DUIButton.scss";

const DUIButton = ({ children, onClick }: DUIButtonPropsType) => {
    return (
        <button onClick={onClick} className="DUIButton">
            {children}
        </button>
    );
};

export { DUIButton };