import React from 'react'
import { useToDay} from '../function/day';
import WeatherDayCard from '../components/WeatherDayCard';


export default function Home() {
  const {today,nextWeekDay} = useToDay();
  
  return (
    <div>
      <p>오늘부터 다음주까지의 날씨!</p>
      {today}~{nextWeekDay}
      <WeatherDayCard/>
    </div>
  )
}
