import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import CustomTypography from "../CustomTypography/CustomTypography";
import CustomBox from "../CustomBox/CustomBox";
import useIsMobile from "../../hooks/useIsMobile";
import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import getDayOfTheWeek from "../../utils/helpers/formatDate";
import CustomIcon from "./components/CustomIcon";

const ForecastTable = () => {
  const isMobile = useIsMobile();
  const { forecastData } = useSelector((state: RootState) => state.weather.history[0] || {});
  const { loading } = useSelector((state: RootState) => state.weather );
  if (!forecastData || loading) return;
  return (
    <CustomBox elevation={2}>
      <Table sx={{ minWidth: `${isMobile ? "100%" : "650px" }` }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <CustomTypography 
                text="Día"
                variant="primary"
                weight={600}
              />
            </TableCell>
            <TableCell align="right" width="50%">
              <CustomTypography 
                text={isMobile ? "T. máx./min.(°C)" : "Temp. máx(°C)/Temp. min(°C)"}
                variant="primary"
                weight={600}
                props={{ sx: { fontSize: "0.875rem" }}}
              />
            </TableCell>
            <TableCell align="right">
              <CustomTypography 
                text="Clima"
                variant="primary"
                weight={600}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forecastData.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {getDayOfTheWeek(row.date)} 
              </TableCell>
              <TableCell align="right">{Math.floor(row.minTemp)}°C / {Math.floor(row.maxTemp)}°C</TableCell>
              <TableCell align="right"><CustomIcon variant={row.weather} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomBox>
  );
};

export default memo(ForecastTable);