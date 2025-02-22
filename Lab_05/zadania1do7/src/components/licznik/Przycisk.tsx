import React from "react";

interface CButtonProps {
    add: () => void;
}

const CButton: React.FC<CButtonProps> = ({add}) => {
    return <button onClick={add}>Dodaj</button>
};

export default CButton;