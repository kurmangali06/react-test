import { ITypeOfHour } from "../../interface";

export interface BaseSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, React.InputHTMLAttributes<HTMLSelectElement> {
  options: ITypeOfHour[];
}
