import React from 'react'
import {CWidgetDropdown,CRow, CCol } from '@coreui/react'


const WidgetScanner = ({scannerID,location, dataTotal}) => {
  return (
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-primary"
          header="ID Scanner"
          text={scannerID}
          style={{fontSize:"50px"}}
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="4">
      <CWidgetDropdown
          color="gradient-warning"
          header="Location"
          text={location}
          style={{fontSize:"50px"}}
        >
      </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="4">
      <CWidgetDropdown
          color="gradient-danger"
          header="Total Items"
          fontHeader ="50px"
          style={{fontSize:"50px"}}
          text={Object.keys(dataTotal).length}
          
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetScanner;
