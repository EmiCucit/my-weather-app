import CloudTwoToneIcon from '@mui/icons-material/CloudTwoTone';
import { IconOwnProps, styled } from '@mui/material';
import { memo } from 'react';


const StyledIcon = styled(CloudTwoToneIcon)`
  color: #556da0;
  height: 7rem;
  width: 7rem;
  animation: logo-spin 20s infinite linear;
`;

const Cloud = ({props}: {props?: IconOwnProps}) => {
  return (
    <StyledIcon {...props}/>
  );
};

export default memo(Cloud);