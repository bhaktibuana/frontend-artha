import React, { ReactNode } from "react";

import AuthProvider from "@/contexts/AuthProvider";
import WindowViewProvider from "@/contexts/WindowViewProvider";

interface IMultiProviderProps {
  children?: ReactNode;
}

const MultiProvider: React.FC<IMultiProviderProps> = (props) => {
  const providers = [AuthProvider, WindowViewProvider];

  return providers.reduceRight((child, Provider) => {
    return <Provider>{child}</Provider>;
  }, props.children);
};

export default MultiProvider;
