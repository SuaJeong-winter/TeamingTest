import React, { useState } from 'react'
import { render } from "react-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPart = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };
  return (
    <div><Calendar onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}</div>
  )
}

render(<CalendarPart />, document.querySelector('#root'));
export default CalendarPart;


// 참고할 자료
//material ui로도 캘린더 만들어보기 
// https://www.youtube.com/watch?v=BN_wfeG47oQ