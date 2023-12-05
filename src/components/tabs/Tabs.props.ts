import { ITypeDays, ITypeOfDay } from "../../interface";

export interface TabsProps {
    typeDays: ITypeDays[]
    allDays: ITypeOfDay[]
    chouseDayes: (e:ITypeDays) => void;
}