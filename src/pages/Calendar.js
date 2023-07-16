import React from 'react'
import Header from '../components/Header';
import CalendarPart from '../CalendarPart';

export const Calendar = () => {
  return (
    <div className='CalendarApp'>
      <div className='Header'>
        <Header />
      </div>
      <div className='CalendarPart'>
        hi
        <CalendarPart />
      </div>
    </div>
  );
}
