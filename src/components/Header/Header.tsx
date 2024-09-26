import { Box, styled, useTheme } from "@mui/material";
import CustomizedSwitch from "../CustomizedSwitch/CustomizedSwitch";
import useIsMobile from "../../hooks/useIsMobile";
import CustomTypography from "../CustomTypography/CustomTypography";
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import { memo } from "react";
import CustomAutocomplete from "../Autocomplete/Autocomplete";

const StlyedBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
`;

const Header = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  return (
    <StlyedBox>
      <Box display="flex">
        <FilterDramaIcon sx={{ position: "relative", top: "-0.25rem", marginRight: "0.25rem", color: `${theme.palette.primary.main}` }}/>
        {isMobile && 
          <CustomTypography 
            text="MWD"
            weight={600}
          />
        }
        {!isMobile && 
          <CustomTypography 
            text="MyWeatherDashboard"
            weight={600}
          />
        }
      </Box>
      <CustomAutocomplete />
      <CustomizedSwitch />
    </StlyedBox>
  );
};

export default memo(Header);