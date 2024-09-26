import { LightModeTwoTone } from "@mui/icons-material";
import { Box, keyframes, styled } from "@mui/material";

const StyledBox = styled(Box)`
  width: 100%;
  height: 29rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = () => {
  return (
    <StyledBox data-testid="loader">
      <LightModeTwoTone 
        sx={{ 
          animation: `${spinAnimation} 3s infinite linear`,
          height: "14rem",  
          width: "14rem",
          color: "#ffb703",
        }}
      />
    </StyledBox>
  )
}

export default Loader