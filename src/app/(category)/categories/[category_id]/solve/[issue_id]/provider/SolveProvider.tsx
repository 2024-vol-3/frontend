import { ReactNode, createContext, useState } from 'react';

interface ContextProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const SolveContext = createContext<ContextProps | null>(null);

export const SolveContextProvider = ({ children }: { children: ReactNode }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const contextValue = {
        isOpen,
        setIsOpen,
    };

    return (
        <SolveContext.Provider value={contextValue}>
        {children}
        </SolveContext.Provider>
    );
};