import React from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('portal')

export default function Portal({children, onClose})  {
  
        return ReactDOM.createPortal(
            <div className='portalBack'
                onClick={onClose}>
                <div className="portalDiv">
                    {children}
                  <button className="btn-save" onClick={onClose}>Close</button>
                </div>
            </div>,
            modalRoot,
        )
    }
