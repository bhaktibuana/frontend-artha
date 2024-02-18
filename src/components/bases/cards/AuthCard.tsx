import React, { ReactNode } from "react";

import { useWindowViewContext } from "@/contexts/WindowViewProvider";

import { ICardWrapper } from "@/components/bases/cards/AuthCardStyle";

interface IBaseAuthCardProps {
  children?: ReactNode;
}

const BaseAuthCard: React.FC<IBaseAuthCardProps> = (props) => {
  const { windowViewType } = useWindowViewContext();
  return (
    <>
      <ICardWrapper viewType={windowViewType}>{props.children}</ICardWrapper>
    </>
  );
};

export default BaseAuthCard;
