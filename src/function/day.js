export function useAllDay() {
  const day = new Date();
  const year = day.getFullYear();
  const month = String(day.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 해줌
  const date = String(day.getDate()).padStart(2, '0');
  const today = `${year}${month}${date}`;
  return today;
}

export function useToDay() {
  const day = new Date();
  const month = String(day.getMonth() + 1).padStart(2, '0');
  const date = String(day.getDate()).padStart(2, '0');
  const today = `${month}${date}`;

  // 7일 뒤의 날짜 계산
  const nextWeek = new Date(day);
  nextWeek.setDate(nextWeek.getDate() + 7);
  const nextWeekMonth = String(nextWeek.getMonth() + 1).padStart(2, '0');
  const nextWeekDate = String(nextWeek.getDate()).padStart(2, '0');
  const nextWeekDay = `${nextWeekMonth}${nextWeekDate}`;

  return { today, nextWeekDay };
}

export function time() {
  const day = new Date();
  let hours = day.getHours().toString().padStart(2, '0'); // 시간을 두 자리로 고정
  hours = (hours === '00' ? '24' : hours); // 만약 시간이 0시라면 24로 변경
  return hours + '00';
}