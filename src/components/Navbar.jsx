import React, { useEffect, useState } from 'react'
import { RiMenuFill } from "react-icons/ri";
import { FaRegSun } from "react-icons/fa6";
import WeatherCard from './WeatherCard';
import { shortData } from '../api/weather';
//이 헤더 페이지에 지역별로 넣으면..? 서울 부산 제주도
export default function Navbar() {
  const [weather, setWeather] = useState();
  useEffect(() => {
    async function fetchData(){
      try{
        const data = await shortData();
        console.log(data);
        setWeather(data);
      }catch{
        console.error('Error');
      }
    }
    fetchData();
  },[])

  const seoulData = weather && weather.seoulData;
  const busanData = weather && weather.busanData;
  const locationData = weather && weather.locationData;

  return (
    <div className = "bg-gradient-to-br bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-400 w-full h-full p-10">
      <div className = "flex flex-row justify-between">
        <div className = "flex flex-row mb-5">
          <span className = "text-4xl text-red-600"><FaRegSun/></span>
          <p className = "text-3xl font-bold text-white">Cloudscape Chronicles</p>
        </div>
        <span className = "text-4xl text-white"><RiMenuFill/></span>
      </div>
      <div className = "flex justify-center">
      <div className = "flex flex-row justify-between w-5/12">
        <WeatherCard
          location = '서울'
          tempskyData = {seoulData}
        />
        <WeatherCard
          location = '현재 위치'
          tempskyData = {locationData}
        />
        <WeatherCard
          location = '부산'
          tempskyData = {busanData}
        />
      </div>
      </div>
    </div>
  )
}