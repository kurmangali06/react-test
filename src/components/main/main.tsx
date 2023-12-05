import React, { FC, useEffect, useState } from 'react'
import './main.css';

import BaseSelect from '../select/BaseSelect';
import { Colors, Days, breakСlass, typeDays, typeOfHour } from '../../utils';
import TotalHours from '../totalHours/totalHours';
import DateRangePicker from '../dataRange/dataRange';
import Tabs from '../tabs/Tabs';
import { ITypeDays } from '../../interface';
import { calculateDays, calculateTime, checkDay, defaultTime, formatTime, formatDate } from '../../heplers';
import TimeRange from '../timeRange/timeRange';
import BaseModal from '../baseModal/baseModal';
import Button from '../Button/Button';





 const Main:FC =  () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const [type, setType ]= useState(60)
  const [days, setDays ]= useState<ITypeDays>({value: [], label: ''})
  const [totalHours, setTotalHours ]= useState(3)
  const [dayHours, setDayHours ]= useState(1)
  const [date, setDate] = useState<[Date, Date]>([new Date(), new Date()])
  const [time, setTime] = useState<[Date, Date]>([defaultTime('first'), defaultTime('second')])
  const [breakType, setBreakType ] = useState(0)
  const [color, setColor] = useState('gray')


  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setType(+e.target.value);
  };
  const handleSelectBreak: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setBreakType(+e.target.value);
  };

  const handleSelectColor: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setColor(e.target.value);
  };


  const handleHours = (hour: number,  type: 'dec' | 'inc') => {
    if(type === 'dec')
      setTotalHours(totalHours + hour)
    else
      setTotalHours(totalHours - hour)
  }

  const chouseDayes = (e: ITypeDays) => {
    setDays(e)
  }
  const handleDaysHours = (hour: number, type: 'dec' | 'inc') => {
    if(type === 'dec') {
      hour === totalHours ? setDayHours(totalHours) : setDayHours(dayHours + hour)   
    }
      
    else
      setDayHours(dayHours - hour)
  }

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    const type =  checkDay(days.label, days.value.length )
    const endDate =  calculateDays(days, totalHours, type)
    setDate([new Date(),  new Date(endDate)])
  },[totalHours, days]);

  useEffect(() => {
    const endTime = calculateTime(type, dayHours, breakType)
    setTime([new Date(),  new Date(endTime)])
  },[type, dayHours, breakType]);

  const handleSubmit = () => {
    const formDate = {
      type: type,
      days: days.value,
      totalHours: totalHours,
      dayHours: dayHours,
      dataStart: formatDate(date[0]),
      dataEnd: formatDate(date[1]),
      timeStart: formatTime(time[0]),
      timeEnd: formatTime(time[1]),
      break: breakType
    }
    console.log(formDate)
    closeModal()
  }
    return (
      <>
      <Button  appearance='primary' className='btnMain'  onClick={openModal}> Изменить расписания</Button>
      <BaseModal isOpen={modalIsOpen} onClose={closeModal} header="Редактирование расписания" onSubmit={handleSubmit}>
      <div className='main'>
        <div className='title'>
          <div className='nameSchole'>
              Онлайн школа 
          </div>
          <div className='group'>
              Цвет группы
              <BaseSelect style={{width: '90px'}}  options={Colors} onChange={handleSelectColor} value={color} />
          </div>
          </div>   
        <div className='firstFields'>
          <BaseSelect  options={typeOfHour} onChange={handleSelect} value={type} />
          <TotalHours  min={1} info='Всего часов' value={totalHours} onChange={handleHours} />
          <DateRangePicker dateRange={date} changeDateRange={setDate}/>
        </div>
          <Tabs typeDays={typeDays} allDays={Days} chouseDayes={(e) =>chouseDayes(e)}/>
        <div className='ThidsFields'>
            <BaseSelect options={breakСlass} onChange={handleSelectBreak} value={breakType} />
            <TotalHours min={1} info='Часов в день' value={dayHours} max={totalHours} onChange={handleDaysHours} />
            <TimeRange timeRange={time}/>
        </div>
        <div className='LastFields'>
            <BaseSelect  style={{width: '400px'}} options={breakСlass} onChange={handleSelectBreak} value={breakType} />
            <BaseSelect options={breakСlass} onChange={handleSelectBreak} value={breakType} />
        </div>
        <div className='Attention'>
          Выбор  <span>преподователя</span> и <span>аудитории</span> не обязательно
        </div>
      </div>
      </BaseModal>
      </>
    )
  
}

export default Main