import { Box, styled } from '@mui/material';
import CustomTypography from '../../CustomTypography/CustomTypography';
import { memo } from 'react';

interface IItem {
  itemField: string;
  itemValue: string | number;
};

const StyledRow = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center
`;

const DataItem = ({ itemField, itemValue }: IItem) => {
  return (
    <StyledRow>
      <CustomTypography 
        text={itemField}
        props={{ fontSize: "1.5rem" }}
        variant='secondary'
        weight={600}
        />
      <CustomTypography 
        text={itemValue}
        props={{ fontSize: "1.5rem" }}
        variant='primary'
        weight={600}
      />
    </StyledRow>
  )
}

export default memo(DataItem);