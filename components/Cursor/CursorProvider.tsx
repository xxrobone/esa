'use client';

/* import React, { createContext, useState } from "react";

export type CursorContextType = {
  projectTitle: string;
  setProjectTitle: (value: string) => void;
};

export const CursorContext = createContext<CursorContextType>({
  projectTitle: "",
  setProjectTitle: () => {},
});

type Props = {
  children: JSX.Element;
};
export default function CursorProvider({ children }: Props) {
  const [projectTitle, setProjectTitle] = useState<string>("");

  const handleSetProjectTitle = (value: string) => setProjectTitle(value);
  return (
    <CursorContext.Provider
      value={{ projectTitle, setProjectTitle: handleSetProjectTitle }}
    >
      {children}
    </CursorContext.Provider>
  );
} */

import React, { createContext, useState, ReactNode } from "react";

interface CursorContextType {
  size: string;
  setSize: (size: string) => void;
}

export const CursorContext = createContext<CursorContextType>({
  size: "small",
  setSize: () => {},
});

interface CursorProviderProps {
  children: ReactNode;
}

const CursorProvider: React.FC<CursorProviderProps> = (props) => {
  const [size, setSize] = useState<string>("small");

  const updateSize = (newSize: string) => {
    setSize(newSize);
  };

  const contextValue: CursorContextType = {
    size,
    setSize: updateSize,
  };

  return (
    <CursorContext.Provider value={contextValue}>
      {props.children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
