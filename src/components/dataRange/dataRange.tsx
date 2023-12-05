import React, { useState, FC } from 'react';
import './dataRange.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DataRangeProps } from './dataRange.props';
import { formatDate } from '../../heplers';

const DateRangePicker: FC<DataRangeProps> = ({dateRange, changeDateRange}): JSX.Element => {
    const [calendarOpen, setCalendarOpen] = useState(false);
  
    const handleDateChange = (dates:[Date , Date]) => {   
        changeDateRange(dates);
        setCalendarOpen(false);
    };
  
  
    const toggleCalendar = () => {
      setCalendarOpen(!calendarOpen);
    };
  
    return (
    <>
      <div className='dataRange' onClick={toggleCalendar}>
        <div className='date'>{dateRange[0] && formatDate(dateRange[0])}</div>
        <div  className='middleText'>до</div>
        <div className='date'>{dateRange[1] &&  formatDate(dateRange[1])}</div>
      </div>
        {calendarOpen && (
                <div className='datapicker'>
                  <DatePicker
                      dateFormat={['dd-mm-yyyy', 'dd-mm-yyyy']}
                      onChange={handleDateChange}
                      startDate={dateRange[0]}
                      endDate={dateRange[1]}
                      selectsRange
                      inline
                  />
                </div>
              )}    
    </>
    );
  };
  
  export default DateRangePicker;