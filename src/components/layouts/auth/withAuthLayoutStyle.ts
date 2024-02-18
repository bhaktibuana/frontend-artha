import styled from "styled-components";

import { size } from "@/helpers/constants/spacer";

interface ILayoutWrapperProps {
  viewType: "desktop" | "mobile";
}

export const LayoutWrapper = styled.div<ILayoutWrapperProps>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: ${(props) =>
      props.viewType === "desktop" ? size.size_96 : size.size_32}
    ${(props) => (props.viewType === "desktop" ? 0 : size.size_16)} 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
