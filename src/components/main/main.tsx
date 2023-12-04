import React, { Component, FC, useState } from 'react'
import './main.css';
import Header from '../header/header';
import BaseSelect from '../select/BaseSelect';
import { typeOfHour } from '../../utils';
import TotalHours from '../totalHours/totalHours';



 const Main:FC =  () => {
  const [value, setValue ]= useState('')
  const [totalHours, setTotalHours ]= useState(3)

  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
  };
  const handleHours = (hour: number,  type: 'dec' | 'inc') => {
    if(type === 'dec')
      setTotalHours(totalHours + hour)
    else
      setTotalHours(totalHours - hour)
  }
  
    return (
      <>
      <div className='main'>
        <Header/>
      </div>
      <div>
         <BaseSelect options={typeOfHour} onChange={handleSelect} value={value} />
         <TotalHours info='Всего часов' value={totalHours} onChange={handleHours} />
      </div>
      </>
    )
  
}

export default Main