import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from "reactstrap";


const InfoModal = (props) => {
  // const okButton = useRef();

  const { 
    isOpen,
    title, 
    btnConfirmText,
    btnConfirmOnClick,
    CustomBtnConfirm,
    btnVersion,
    children,
    ...rest
  } = props

  let confirmColor;
  let icon ;
  switch (btnVersion) {
    case "peace":
      confirmColor= "primary"
      icon = "fa fa-check-square "
      break;
    case "danger":
      confirmColor= "danger";
      icon = "fa fa-window-close";
      break;
    case "close":
      confirmColor= "warning"
      icon = " fa fa-window-close "
      break;
    default:
      confirmColor="primary";
      break;
   
  }

  

  const confirmButton = ()=>{
    return CustomBtnConfirm ? <CustomBtnConfirm/> : <Button size="sm" color={confirmColor} onClick={btnConfirmOnClick}><i className={icon}></i> {btnConfirmText}</Button>
  }
  
  return (
    <Modal isOpen={isOpen} {...rest} backdrop="static">
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        {/* <Button color={confirmColor} onClick={btnConfirmOnClick}>{btnConfirmText}</Button> */}
        {confirmButton()}
      </ModalFooter>
    </Modal>
  )
}

InfoModal.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  CustomBtnConfirm: PropTypes.element,
  btnConfirmText: PropTypes.string,
  btnConfirmOnClick: PropTypes.func,
  btnVersion : PropTypes.oneOf(["peace","danger","close"])
}

InfoModal.defaultProps = {
  isOpen : false,
  title : "Berhasil", 
  btnConfirmText : "Tutup",
  btnConfirmOnClick: ()=>{},
  children : "",
  btnVersion: "close"
}

export default InfoModal;
