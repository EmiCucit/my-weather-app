import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useIsMobile from '../../hooks/useIsMobile';
import { cities } from './constants/options';
import useAutocomplete from './hooks/useAutocomplete';
import { memo } from 'react';

const CustomAutocomplete = () => {
  const isMobile = useIsMobile();
  const { filterOptions, handleClose, handleOpen, handleSelection, open } = useAutocomplete();
  return (
    <Autocomplete
      sx={{ width: `${isMobile ? "10rem" : "25rem"}`, position: "relative", bottom: "0.75rem" }}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      isOptionEqualToValue={(option, value) => option.city === value.city}
      filterOptions={filterOptions}
      getOptionLabel={(option) => option.city}
      onChange={handleSelection}
      options={cities}
      loadingText="Cargando..."
      renderInput={(params) => (
        <TextField
          {...params}
          label="Buscar ciudad"
          variant='standard'
          slotProps={{
            input: {
              ...params.InputProps,
              style: { padding: "0 0.5rem", fontSize: `${isMobile ? "0.857rem" : "1rem" }` },
            },
          }}
        />
      )}
    />
  );
}

export default memo(CustomAutocomplete);
