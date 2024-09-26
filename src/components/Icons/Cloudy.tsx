import { Box, IconOwnProps, styled } from "@mui/material";
import { Cloud, LightModeTwoTone } from "@mui/icons-material";
import { memo } from "react";


const SunIcon = styled(LightModeTwoTone)`
  color: #ffb703;
  height: 6rem;
  width: 6rem;
  z-index: -1;
`;

const CloudIcon = styled(Cloud)`
  color: white;
  height: 6rem;
  position: absolute;
  left: 2.5rem;
  top: 2rem;
  width: 6rem;
`;

const StyledBox = styled(Box)`
  display: inline-block;
  position: relative;
  width: 7rem;
  width: 7rem;
  padding: 1rem;
  border-radius: 100%; 
`;

const Cloudy = ({props}: {props?: IconOwnProps}) => {
  return (
    <StyledBox>
      <SunIcon {...props} />
      <CloudIcon {...props} />
    </StyledBox>
  );
};

export default memo(Cloudy);
