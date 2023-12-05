import  { FC, useState } from 'react'
import Button from '../Button/Button'
import { ITypeDays } from '../../interface'
import './Tabs.css'
import cn from 'classnames'
import { TabsProps } from './Tabs.props'

const Tabs:FC<TabsProps> = ({allDays, typeDays, chouseDayes}): JSX.Element =>  {
    const [currentTab, setCurrentTab] = useState<string[]>(['ПН','СР', 'ПT' ])
    const [arrSet, setArrSet] = useState<string[]>(['ПН','СР', 'ПT'])
    const updatedCategory = (t: ITypeDays)  => {
        setCurrentTab(t.value)
        setArrSet(t.value)
        console.log()
        chouseDayes(t)
    }
    const handleAddDay = (e: string) => {
        if(arrSet.filter(t => t === e).length) {
           const filterElement = arrSet.filter(a => a !== e)
           setArrSet(filterElement)
           chouseDayes( { value: filterElement, label: ''})
        } else {
            const addElemnt = [...arrSet, e]
            setArrSet(addElemnt)
            chouseDayes( { value: addElemnt, label: ''})
        } 
    }
  return (
    <div className='tabs'>
        <div className='tabHeader'>
            {typeDays && typeDays.map((t,index) => (
                <Button className={cn('btntab', {
                    'second': index === typeDays.length -1,
                    'first': index === 0,
                })}  key={index} appearance={currentTab.every((val, index) => val === t.value[index]) ? 'primary': 'ghost'} onClick={() => updatedCategory(t)}>
                    {t.label}
                </Button>
            ))}
        </div>
        <div className='tabBody'>
               { allDays &&  allDays.map((d, index) => (
                <div className={cn('tab', {
                    'active' : arrSet.length && arrSet.includes(d.value)
                })} key={index} onClick={() => handleAddDay(d.value)}>{d.label}</div>
               ))} 
        </div>
    </div>
  )
}
export default Tabs