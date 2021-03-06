import React from 'react'
import {CWidgetDropdown,CRow,CCol} from '@coreui/react'


const WidgetsDropdown = ({dataInBound,dataOutBound, dataTotal}) => {
  return (
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-primary"
          header="Total items Inbound today"
          text={Object.keys(dataInBound).length}
          style={{fontSize:"50px"}}
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="4">
      <CWidgetDropdown
          color="gradient-warning"
          header="Total items Outbound today"
          text={Object.keys(dataOutBound).length}
          style={{fontSize:"50px"}}
        >
      </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="4">
      <CWidgetDropdown
          color="gradient-danger"
          header="Total Stock items today"
          fontHeader ="50px"
          style={{fontSize:"50px"}}
          text={Object.keys(dataTotal).length}
        >
        </CWidgetDropdown>
      </CCol>     
    </CRow>
  )
}

export default WidgetsDropdown;
