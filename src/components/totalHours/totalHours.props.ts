export interface ITotalHours {
    value: number;
    info: string;
    onChange: (val : number, type: 'dec' | 'inc') => void;
    max?: number
    min: number
}