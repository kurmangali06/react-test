export interface DataRangeProps {
    dateRange: [Date, Date];
    changeDateRange: (e:[Date, Date]) => void;
}