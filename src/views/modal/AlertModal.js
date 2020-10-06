import React from 'react';
// import PropTypes from 'prop-types';
import { CModal, CModalHeader, CModalFooter, CModalBody, CButton } from '@coreui/react';


const AlertModal = (props) => {
  const {
    isOpen, 
    title, 
    btnConfirmText,
    btnConfirmOnClick,
    CustomBtnConfirm,
    btnCancelText,
    btnCancelOnClick,
    btnVersion,
    children,
    disableFooter,
    ...rest
  } = props

  // useEffect(() => {
  //   {
  //     isOpen, 
  //     title, 
  //     btnConfirmText,
  //     btnConfirmOnClick,
  //     btnCancelText,
  //     btnCancelOnClick,
  //     btnVersion,
  //     children,
  //     disableFooter,
  //     // ...rest
  //   } = props
  // }, []);
  

  let confirmColor;
  let cancelColor = "warning";
  let icon;
  let iconCancel="fa fa-window-close"
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
    return CustomBtnConfirm ? <CustomBtnConfirm/> : <CButton size="sm" color={confirmColor} onClick={btnConfirmOnClick}><i className={icon}></i> {btnConfirmText}</CButton>
  }
  
  return (
    <CModal isOpen={isOpen} {...rest} backdrop="static">
      <CModalHeader>{title}</CModalHeader>
      <CModalBody>{children}</CModalBody>
      {
        disableFooter ? []:(
          <CModalFooter>
            {confirmButton()}{'  '}
            <CButton size="sm" color={cancelColor}  onClick={btnCancelOnClick}><i className={iconCancel}></i> {btnCancelText}</CButton>
          </CModalFooter>
        )
      }
      
    </CModal>
  )
}

// AlertModal.propTypes = {
//   isOpen: PropTypes.bool,
//   title: PropTypes.string,
//   btnConfirmText: PropTypes.object,
//   btnConfirmOnClick: PropTypes.object,
//   CustomBtnConfirm: PropTypes.element,
//   btnCancelText: PropTypes.object,
//   btnCancelOnClick: PropTypes.object,
//   btnVersion: PropTypes.oneOf(["peace","danger"]),
//   disableFooter: PropTypes.bool,
//   children: PropTypes.element,
// }

AlertModal.defaultProps = {
  isOpen: false,
  title : "", 
  btnConfirmText : "Setuju",
  btnConfirmOnClick: {},
  CustomBtnConfirm: null,
  btnCancelText : "Tidak",
  btnCancelOnClick:{},
  children : "",
  btnVersion: "peace",
  disableFooter: false,
}

export default AlertModal;
