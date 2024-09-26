import { Typography, TypographyProps, useTheme } from '@mui/material';
import { memo } from 'react';

interface ICustomTypography {
  text: string | number;
  props?: TypographyProps;
  weight?: number;
  variant?: "primary" | "secondary"
}

const CustomTypography = ({ props, text, variant = "primary", weight }: ICustomTypography) => {
  const theme = useTheme();
  return (
    <Typography 
      {...props} 
      color={variant === "primary" ? theme.palette.primary.dark : theme.palette.secondary.dark} 
      fontWeight={weight}
    >
      {text}
    </Typography>
  )
}

export default memo(CustomTypography);