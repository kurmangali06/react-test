import React, { FC } from 'react'
import ReactDOM from 'react-dom';
import { BaseModalProps } from './baseModal.props';
import './baseModal.css'
import Button from '../Button/Button';

 const BaseModal:FC<BaseModalProps> = ({ isOpen, onClose, header, children,onSubmit }) => {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h4>{header}</h4>
              <button onClick={onClose}>&times;</button>
            </div>
            <div className="modal-content">{children}</div>
            <div className="modal-footer">
                 <Button appearance='ghost' onClick={onClose}>Отмена</Button>
                 <Button appearance='ghost' onClick={onSubmit}>Добавить расписания</Button>
            </div>
          </div>
        </div>,
        document.body
      );
}
export default  BaseModal