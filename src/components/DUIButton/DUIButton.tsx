import * as React from "react";
import { DUIButtonPropsType } from "../../types/index";

const DUIButton = ({ children, onClick }: DUIButtonPropsType) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "10px 20px",
                fontSize: "1.2em",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: "blue",
                color: "white",
                border: "none",
            }}
        >
            {children}
        </button>
    );
};

export { DUIButton };