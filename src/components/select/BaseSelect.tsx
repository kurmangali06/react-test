
import React, { FC } from 'react';
import { BaseSelectProps } from './BaseSelect.props';
import './BaseSelect.css';


const BaseSelect: FC<BaseSelectProps> = ({ options, ...selectProps }): JSX.Element => {

  return (
    <select {...selectProps} className='container'>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default BaseSelect;
