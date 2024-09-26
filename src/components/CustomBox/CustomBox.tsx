import { Box, BoxProps, styled, useTheme } from "@mui/material";
import { memo, ReactNode } from "react";

interface ICustomBox {
  children: ReactNode;
  props?: BoxProps;
  elevation: number;
}

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.5rem;
`;

const CustomBox = ({ children, props, elevation }: ICustomBox) => {
  const theme = useTheme();
  return (
    <StyledBox 
      {...props}
      sx={{ boxShadow: theme.shadows[elevation] }}
    >
      {children}
    </StyledBox>
  );
};

export default memo(CustomBox);