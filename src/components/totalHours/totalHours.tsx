import {FC} from 'react'
import { ITotalHours } from './totalHours.props';
import Button from '../Button/Button';
import './totalHours.css'

 const TotalHours: FC<ITotalHours> = ({value, onChange, info, max, min}): JSX.Element =>  {
    const decrimentValue = () => {
        onChange(1, 'dec')
    }
    const incrementValue = () => {
        onChange(1, 'inc')
    }
  return (
    <div className='total'>
       <Button  appearance='primary' className='btnTotal left' disabled={value === min} onClick={incrementValue}>-</Button>
        <div className='value'>
        {value}
        </div>
        <div className='info'>{info}</div>
        <Button appearance='primary' disabled={ value === max } className='btnTotal right' onClick={decrimentValue}>+</Button>
        
    </div>
  )
}
export default TotalHours;