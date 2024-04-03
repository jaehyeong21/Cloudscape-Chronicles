import React from 'react';
import { getPtyIcon, getSkyIcon } from '../function/getSky';

export default function WeatherCard({ location, tempskyData }) {
  // 데이터가 없는 경우 로딩 상태를 표시할 수 있도록 조건부 렌더링
  if (!tempskyData) {
    return <div>Loading...</div>;
  }

  // 데이터 유형을 식별하는 상수 정의
  const DATA_TYPES = {
    TMN: 'TMN',
    TMX: 'TMX',
    SKY: 'SKY',
    PTY: 'PTY'
  };

  // 데이터를 저장할 객체 초기화
  const dataMap = {};

  // tempskyData 배열을 순회하며 데이터를 식별하여 매핑
  tempskyData.forEach(data => {
    switch(data.category) {
      case DATA_TYPES.TMN:
        dataMap.TMN = data.fcstValue;
        break;
      case DATA_TYPES.TMX:
        dataMap.TMX = data.fcstValue;
        break;
      case DATA_TYPES.SKY:
        dataMap.Sky = data.fcstValue;
        break;
      case DATA_TYPES.PTY:
        dataMap.Pty = data.fcstValue;
        break;
      default:
        break;
    }
  });

  // 날씨 아이콘 가져오기
  const SkyIcon = getSkyIcon(dataMap.Sky);
  const PtyIcon = getPtyIcon(dataMap.Pty);

  return (
    <div className="flex flex-col justify-evenly p-2 rounded-lg text-white w-36 h-36 shrink-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <header className="text-xl">{location}</header>
      <span className="text-2xl">{dataMap.Pty === "0" ? SkyIcon : PtyIcon}</span>
      <span className="text-lg">{dataMap.TMN} ~ {dataMap.TMX}</span>
    </div>
  );
}
