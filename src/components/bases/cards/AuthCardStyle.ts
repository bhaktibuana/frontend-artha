import styled from "styled-components";

import { defaultColors } from "@/helpers/constants/colors";
import { size } from "@/helpers/constants/spacer";

interface ICardWrapperProps {
  viewType: "desktop" | "mobile";
}

export const ICardWrapper = styled.div<ICardWrapperProps>`
  width: ${(props) => (props.viewType === "desktop" ? size.size_600 : "100%")};
  height: auto;
  margin-bottom: auto;
  padding: ${(props) =>
    props.viewType === "desktop"
      ? size.size_24
      : `${size.size_20} ${size.size_16}`};
  box-shadow: 0 0 ${size.size_6} ${defaultColors.shadowDefault};
  border-radius: ${size.size_8};
  display: flex;
  flex-direction: column;
  gap: ${size.size_16};
`;
