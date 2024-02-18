import React, { ComponentType } from "react";

import { useWindowViewContext } from "@/contexts/WindowViewProvider";

import { LayoutWrapper } from "@/components/layouts/auth/withAuthLayoutStyle";

const withAuthLayout = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const AuthLayout: React.FC<P> = (props) => {
    const { windowViewType } = useWindowViewContext();
    return (
      <>
        <LayoutWrapper viewType={windowViewType}>
          <WrappedComponent {...props} />
        </LayoutWrapper>
      </>
    );
  };
  return AuthLayout;
};

export default withAuthLayout;
