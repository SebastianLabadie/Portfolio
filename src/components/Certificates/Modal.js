import React from 'react'
import ReactDom from 'react-dom'
import styled, { keyframes } from 'styled-components'

const hide = keyframes`
    from {
    transform: scale(1);
    opacity:1;
  }

  to {
    transform: scale(0);
    opacity:0;
  }
`

const show = keyframes`
    from {
    transform: scale(0);
    opacity:0;
  }

  to {
    transform: scale(1);
    opacity:1;
  }
`

const ModalStyled=styled.div`
    //display:${(props)=>props.show ? 'block' : "none"};

    .modal__backdrop{
        display:${(props)=>props.show ? 'block' : "none"};
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        left:0;
        background-color: rgba(0, 0, 0, .7);
        z-index: 1;
    }
    .modal__content{
        background-color:#fff;
        height:400px;
        width:400px;
        position: fixed;
        top:calc(50% - 200px);
        left:calc(50% - 200px);
        z-index:2;
    }

    .modal__hide{
        opacity: 0;
        animation:${hide} .25s;
        transform: scale(0);
    }

    .modal__show{
        opacity: 1;
        animation:${show} .2s;
        transform: scale(1);
    }
`
function Modal({show,setShow,title}) {

 return ReactDom.createPortal(
        <ModalStyled show={show}>
            <div className="modal__backdrop" onClick={setShow} ></div>
          <div className={show ? `modal__content modal__show` : `modal__content modal__hide` }>{title}</div>
        </ModalStyled>,
          document.getElementById('portal')
    )
}

export default Modal