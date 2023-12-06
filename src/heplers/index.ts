import { ITypeDays } from "../interface";

export const formatDate = (dateString: Date) => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
  
    // Форматируем строку
    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
};
export const formatTime = (dateString: Date) => {
  const dateObject = new Date(dateString);
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  // Форматируем строку
  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
};
export function generateArrayUpToNumber(targetNumber: number) {
    const resultArray = [];
  
    for (let i = 0; i <= targetNumber; i++)
      resultArray.push(i);
  
    return resultArray;
  }
  export const calculateDays = (days: ITypeDays, total: number, actions: number) => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    let allDays;
  
    switch (actions) {
        case 3:
        case 2:
        case 1:
        case 4:
        case 5:
        case 6:
        case 7:
            allDays = 7 * (total / actions);
            break;
        default:
            allDays = 0;
            break;
    }
  
    return futureDate.setDate(currentDate.getDate() + allDays);
  };
  

export function checkDay(type: string, total: number) {
    switch(type) {
        case 'ПН/СР/ПT':
         return 3
        case 'ВТ/ЧТ': 
         return 2
        default: 
        return total
    }
}




export const calculateTime = (type: number, total: number, breakType: number) => {
  const newDate = new Date();
  const totalMinute = (type * total) - breakType;
  const  currentDate = newDate.setMinutes(newDate.getMinutes() + totalMinute)
    return new Date(currentDate)

}
