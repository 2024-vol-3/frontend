import { useContext } from "react";
import { SolveContext } from "../provider/SolveProvider";

export const useModal = () => {

    const context = useContext(SolveContext);

    if (!context) {
        throw new Error("SolveContextが提供されていません");
    }

    const { isOpen, setIsOpen } = context;

    return {
        isOpen,
        setIsOpen,
    }
}