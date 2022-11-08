import React from 'react';
import './modal.css'

const Modal = ({ open, onClose, content, handleSubmit, title }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => e.stopPropagation()} className='modal--container'>
        <div className='modal--header'>
          <h2>{title}</h2>
          <div className="closeBtn" onClick={onClose}>X</div>
        </div>
        <div className='modal--body'>
          {content}
        </div>
        {handleSubmit && (
          <button className='submit--btn' onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  )
}

export default Modal