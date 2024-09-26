import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import { Box, IconOwnProps, styled } from '@mui/material';
import { memo } from 'react';


const StyledIcon = styled(ThunderstormTwoToneIcon)`
  color: #556da0;
  height: 6rem;
  width: 6rem;
  animation: logo-spin 20s infinite linear;
`;

const StyledBox = styled(Box)`
  display: inline-block;
  position: relative;
  width: 7rem;
  width: 7rem;
  padding: 1rem;
  border-radius: 100%; 
`;

const Rainy = ({props}: {props?: IconOwnProps}) => {
  return (
    <StyledBox>
      <StyledIcon {...props}/>
    </StyledBox>
  );
};

export default memo(Rainy);