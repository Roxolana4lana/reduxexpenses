import React,{ Component} from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('portal')

export default class Portal extends Component {
    render() {
        return ReactDOM.createPortal(
            <div className='portalBack'
                
                onClick={this.props.onClose}
            >
                <div className="portalDiv"
                   
                >
                    {this.props.children}
                   
                    <button className="btn-save" onClick={this.props.onClose}>Close</button>
                </div>
            </div>,
            modalRoot,
        )
    }
}