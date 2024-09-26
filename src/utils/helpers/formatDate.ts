import dayjs from 'dayjs';
import 'dayjs/locale/es';

const getDayOfTheWeek = (date: string) => {
  dayjs.locale('es');  
  const dayOfTheWeek = dayjs(date).format('ddd');
  const formattedDay = dayOfTheWeek.substring(0,1).toUpperCase() + dayOfTheWeek.substring(1) 
  return formattedDay;
};

export default getDayOfTheWeek;