import axios from "axios";
import { time, useAllDay } from "../function/day";
import { getGeolocation } from "../function/locationXY";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

//초단기 예보
//async await는 항상 try, catch 사용
export async function veryShortData() {
  const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?ServiceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20240401&base_time=0630&nx=55&ny=127`
  try {
    const response = await axios.get(url); //데이터 조회
    return response.data; //응답 데이터 반환
  }/* 성공처리 */ catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }/* 오류처리 */
}

//단기 예보
export async function shortData() {
  const XY = await getGeolocation();
  console.log(XY);
  const seoulUrl = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=${API_KEY}&numOfRows=1000&pageNo=1&dataType=JSON&base_date=20240402&base_time=0500&nx=60&ny=127`;
  const busanUrl = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=${API_KEY}&numOfRows=1000&pageNo=1&dataType=JSON&base_date=20240402&base_time=0500&nx=98&ny=76`;
  const myLocation = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=${API_KEY}&numOfRows=1000&pageNo=1&dataType=JSON&base_date=20240402&base_time=0500&nx=${XY.x}&ny=${XY.y}`
  try {
    // 서울과 부산 데이터를 동시에 가져오기
    const [seoulResponse, busanResponse, locationResponse] = await Promise.all([
      axios.get(seoulUrl),
      axios.get(busanUrl),
      axios.get(myLocation),
    ]);

    // 서울과 부산 데이터 처리
    const seoulData = seoulResponse.data.response.body.items.item.filter((item) => (item.category === "TMX" || item.category === "TMN" ||
    (item.category ==="SKY") && (item.fcstTime === time()) ||
    (item.category === "PTY") && item.fcstTime === time()) &&
    (item.fcstDate === useAllDay())); // 서울의 하루 최고,최저 온도 및 하늘상태

    const busanData = busanResponse.data.response.body.items.item.filter((item) => (item.category === "TMX" || item.category === "TMN" ||
    (item.category ==="SKY") && (item.fcstTime === time()) ||
    (item.category === "PTY") && item.fcstTime === time()) &&
    (item.fcstDate === useAllDay())); // 부산의 하루 최고,최저 온도 및 하늘상태

    const locationData = locationResponse.data.response.body.items.item.filter((item) => (item.category === "TMX" || item.category === "TMN" ||
    (item.category ==="SKY") && (item.fcstTime === time()) ||
    (item.category === "PTY") && item.fcstTime === time()) &&
    (item.fcstDate === useAllDay()));

    return { seoulData, busanData, locationData };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
