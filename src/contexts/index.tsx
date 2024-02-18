import React, { ReactNode } from "react";

import AuthProvider from "@/contexts/AuthProvider"

interface IMultiProviderProps {
  children?: ReactNode;
}

const MultiProvider: React.FC<IMultiProviderProps> = (props) => {
  const providers = [AuthProvider];
  return providers.reduceRight((child, Provider) => {
    return <Provider>{child}</Provider>;
  }, props.children);
};

export default MultiProvider;
