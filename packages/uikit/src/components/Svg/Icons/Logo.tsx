import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 198 199" {...props}>
      <image width="198" height="199" href="/images/logo/logo.png"/>
    </Svg>
  );
};

export default Icon;
