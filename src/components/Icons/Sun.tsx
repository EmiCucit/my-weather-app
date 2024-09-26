import LightModeTwoTone from '@mui/icons-material/LightModeTwoTone';
import { IconOwnProps, styled } from '@mui/material';
import { memo } from 'react';

const StyledIcon = styled(LightModeTwoTone)`
  color: #ffb703;
  height: 7rem;
  width: 7rem;
`;

const Sun = ({ props }: { props?: IconOwnProps }) => {
  return (
    <StyledIcon {...props} />
  )
}

export default memo(Sun);