import { Box, styled, keyframes } from '@mui/material'
import { memo } from 'react'
import CustomTypography from '../CustomTypography/CustomTypography';
import LightModeTwoTone from '@mui/icons-material/LightModeTwoTone';
import useIsMobile from '../../hooks/useIsMobile';
import CloudIcon from '@mui/icons-material/Cloud';

interface IEmptyState {
  hasSearchs: boolean;
  city?: string;
};

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledBox = styled(Box)`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  gap: 2rem;
  text-align: center;
`;

const StyledCloudIcon = styled(CloudIcon)`
  color: white;
  width: 12rem;
  height: 12rem;
`;

const EmptyState = ({ hasSearchs, city }: IEmptyState) => {
  const isMobile = useIsMobile();
  return (
    <StyledBox>
      <Box position="relative">
        <LightModeTwoTone 
          sx={{ 
            animation: `${spinAnimation} 20s infinite linear`,
            height: "14rem",  
            width: "14rem",
            color: "#ffb703",
          }}
        />
        <Box position="absolute" display="flex" top="3rem" right="-4rem">
          <StyledCloudIcon sx={{ position: "relative", zIndex: 1, right: "-4rem", color: "rgb(245, 245, 245)" }} />
          <StyledCloudIcon sx={{ transform: "scale(1.1)"  }} />
        </Box>
      </Box>
      <CustomTypography 
        text={!hasSearchs ? "Realizá una búsqueda para ver el clima en tu ciudad" : `No se pudo obtener datos del clima en ${city}` }
        weight={600}
        variant='secondary'
        props={{ sx: { fontSize: `${isMobile ? "1.5rem" : "2rem"}`} }}
      />
    </StyledBox>
  );
};

export default memo(EmptyState);
