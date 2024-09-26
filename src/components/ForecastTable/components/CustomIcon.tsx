import { TWeather } from '@/store/slice/weatherSlice';
import CloudOutlined from "@mui/icons-material/CloudOutlined";
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const CustomIcon = ({ variant }: {variant: TWeather}) => {
    switch (variant) {
      case "Rain":
        return <ThunderstormOutlinedIcon data-testid="rain" />;
      case "Clear": 
        return <LightModeOutlinedIcon data-testid="clear" />
      default: 
        return <CloudOutlined />
    }
  } 

export default CustomIcon