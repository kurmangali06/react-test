import {FC} from 'react'
import { ITotalHours } from './totalHours.props';
import Button from '../Button/Button';

 const TotalHours: FC<ITotalHours> = ({value, onChange, info}) =>  {
    const decrimentValue = () => {
        onChange(1, 'dec')
    }
    const incrementValue = () => {
        onChange(1, 'inc')
    }
  return (
    <div>
        <Button appearance='primary' onClick={decrimentValue}>+</Button>
        <div>
        {value}
        <span>{info}</span>
        </div>
        <Button  appearance='primary' disabled={value === 0} onClick={incrementValue}>-</Button>
    </div>
  )
}
export default TotalHours;