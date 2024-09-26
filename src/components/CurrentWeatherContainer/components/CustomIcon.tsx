import Sun from '../../Icons/Sun'
import Cloudy from '../../Icons/Cloudy'
import Cloud from '../../Icons/Cloud'
import Rainy from '../../Icons/Rainy'
import { IconProps } from '@mui/material';
import { TWeather } from '../../../store/slice/weatherSlice';

interface ICustomItem {
  variant: TWeather;
  props?: IconProps; 
}

const CustomIcon = ({ variant, props }: ICustomItem) => {
  switch (variant) {
    case "Clear":
      return <Sun {...props} />;
    case "Clouds":
      return <Cloudy {...props} />
    case "Rain":
      return <Rainy {...props} />;
    case "Dizzle":
      return <Rainy {...props} />;  
    case "Thunderstorm":
      return <Rainy {...props} />;
    case "Snow":
      return <Cloud {...props} />;
    case "Mist":
      return <Cloud {...props} />
    case "Smoke":
      return <Cloud {...props} />;
    case "Haze":
      return <Cloud {...props} />;
    case "Dust":
      return <Cloud {...props} />;
    case "Fog":
      return <Cloud {...props} />;
    case "Sand":
      return <Cloud {...props} />;
    case "Ash":
      return <Cloud {...props} />;
    case "Squall":
      return <Rainy {...props} />;
    case "Tornado":
      return <Rainy {...props} />;
    default:
      return <Sun {...props} />;
  }
}

export default CustomIcon