import React, { ReactNode } from "react";

import { useWindowViewContext } from "@/contexts/WindowViewProvider";

import { ICardWrapper } from "@/components/bases/cards/AuthCardStyle";

interface IAuthCardProps {
  children?: ReactNode;
}

const AuthCard: React.FC<IAuthCardProps> = (props) => {
  const { windowViewType } = useWindowViewContext();
  return (
    <>
      <ICardWrapper viewType={windowViewType}>{props.children}</ICardWrapper>
    </>
  );
};

export default AuthCard;
