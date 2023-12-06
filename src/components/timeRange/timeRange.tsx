import  { FC } from 'react';
import { formatTime } from '../../heplers';
import { ITimeRangeProps } from './timeRange.props';
import './timeRange.css'


const TimeRange: FC<ITimeRangeProps>  = ({timeRange}): JSX.Element =>  {

  
  return (
    <>
    <div className='timeRange' >
      <div className='time'>{timeRange[0] && formatTime(timeRange[0])}</div>
      <div  className='middleText'>до</div>
      <div className='time'>{timeRange[1] &&  formatTime(timeRange[1])}</div>
    </div>
  </>
  )
}

export default TimeRange