import { ITypeDays, ITypeOfDay, ITypeOfHour, IbreakСlass } from "../interface";

export const typeOfHour:ITypeOfHour[] = [
 { value: 45, label: 'Академические '}, { value: 60, label: 'Астрономические '}];

export const breakСlass:IbreakСlass[] = [
     { value: 5, label: '5 минут'},
     { value: 10, label: '10 минут'},
     { value: 15, label: '15 минут'},
     { value: 20, label: '20 минут'},
     { value: 0, label: 'Без перерыв'},
];


export const typeDays:ITypeDays[] = [
    { value: ['ПН','СР', 'ПT' ], label: 'ПН/СР/ПT'}, { value: ['ВТ', 'ЧТ'], label: 'ВТ/ЧТ'}];
   
export const Days:ITypeOfDay[] = [
        { value: 'ПН', label: 'ПН '}, 
        { value: 'ВТ', label: 'ВТ'}, 
        { value: 'СР', label: 'СР'}, 
        { value: 'ЧТ', label: 'ЧТ'},
        { value: 'ПT', label: 'ПT'},
        { value: 'СБ', label: 'СБ'},
        { value: 'ВС', label: 'ВС'},
];
      
export const Colors:ITypeOfDay[] = [
    { value: 'gray', label: 'gray '}, 
    { value: 'blue', label: 'blue'}, 
    { value: 'green', label: 'green'}, 
    { value: 'yellow', label: 'yellow'},
    { value: 'while', label: 'while'},
]

export const offices:IbreakСlass[] = [
    { value: 1, label: "1 аудитория"}, 
    { value: 2, label: '2 аудитория'}, 
    { value: 3, label: '3 аудитория'}, 
    { value: 4, label: '4 аудитория'},
    { value: 5, label: '5 аудитория'},
]
export const teachers:ITypeOfDay[] = [
    { value: 'Иванов', label: "Иванов"}, 
    { value: 'Петров', label: 'Петров'}, 
]