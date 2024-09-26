import CustomTypography from '../../CustomTypography/CustomTypography';
import CustomBox from '../../CustomBox/CustomBox';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { moveToTop } from '../../../store/slice/weatherSlice';

interface ILastSearchItem {
  city: string;
}

const LastSearchItem = ({ city }: ILastSearchItem) => {
  const dispatch = useDispatch();

  const handleOnClick = useCallback(() => {
    dispatch(moveToTop(city));
  }, [city, dispatch]);
  return (
    <CustomBox elevation={2} props={{ onClick: handleOnClick }}>
      <CustomTypography 
        text={city}
        weight={600}
        variant='secondary'
        props={{ style: { cursor: "pointer", width: "fit-content" } }}
      />
    </CustomBox>
  )
}

export default memo(LastSearchItem);