import React, {useState, useEffect} from 'react'
import {CCard,CCardBody,CCol,CLabel,CRow,CForm,CFormGroup,} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import ItemList from '../../Database/itemList';
import LocationList from '../../Database/locationList';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { freeSet } from '@coreui/icons'
import Select from 'react-select';


const position = [
  { value: 'All', label: 'All' },
  { value: 'Pintu Utara', label: 'Pintu Utara' },
  { value: 'Pintu Selatan', label: 'Pintu Selatan' },
]

const GateScanner = () => {
  const [selectedLocation, setSelectedLocation] = useState('Gudang A');
  const [selectedPosition, setSelectedPosition] = useState('All');
  const [total, setTotalBound] = useState([])
 
  useEffect(() => {
   if(selectedPosition === "All"){
    var TotalList = ItemList.filter(item => item.location === selectedLocation)
   }else{
    TotalList = ItemList.filter(item => item.location === selectedLocation && item.position === selectedPosition)
   }
    
      setTotalBound(TotalList)
   
  }, 
  [selectedLocation, selectedPosition] )
 

const filterReport = () => {
 
  return (
    <div>
    <CForm>
      <CRow className="mb-2">
        <CCol>       
          <CFormGroup>
            <CLabel htmlFor="name">LOCATION</CLabel>
            <Select
              isSearchable
              defaultValue={selectedLocation}
              // placeholder={LocationList[0]}
              value={LocationList.find(obj => obj.value === selectedLocation)} // set selected value
              options={LocationList} // set list of the data
              onChange={(e) => setSelectedLocation(e.value)}  // assign onChange function
            />
          </CFormGroup>
        </CCol>
        <CCol>
        <CFormGroup>
            <CLabel htmlFor="name">POSITION</CLabel>
            <Select
              isSearchable
              defaultValue={position[0]}
              value={position.find(obj => obj.value === selectedPosition)} // set selected value
              options={position} // set list of the data
              onChange={(e) => setSelectedPosition(e.value)} // assign onChange function
            />
          </CFormGroup>
        </CCol>
      </CRow>
     
    </CForm>
    </div>
  )
}
const itemList = ()=>{
  const 	statusFormatter = (cell, row) => {
    if(row.status === "INBOUND") {
        return (
          <div style={{color:"green"}}><CIcon content={freeSet.cilArrowBottom} /> {row.status}<span></span></div>
        )
    } else if (row.status === "OUTBOUND") {
        return (
          <div style={{color:"red"}}><CIcon content={freeSet.cilArrowTop}  /> {row.status}<span></span></div>
        )
    }
}
  var options = {
    sizePerPageList: [
      {text: 'lihat 5', value: 5},
      {text: 'lihat 10', value: 10},
      {text: 'lihat 15', value: 15}
    ],
    sizePerPage: 10,
    sortName: 'id',
    // borderless : true,
    noDataText: 'No data(s) found. Please try again by using another keyword.'
  }

  return(
    <BootstrapTable data={total} 
    striped hover pagination search edit options={options} 
    exportCSV version='4' dataAlign="Left"
    searchPlaceholder={"Pencarian...."}   >
      <TableHeaderColumn 
         thStyle={ { whiteSpace: 'normal', width: '10%'} } 
         tdStyle={ { whiteSpace: 'normal', width:"10%" } } 
        isKey
        dataField="rfid"
      >
       RFID ID
      </TableHeaderColumn>
      <TableHeaderColumn
       thStyle={ { whiteSpace: 'normal', width: '10%'} } 
       tdStyle={ { whiteSpace: 'normal', width:"10%" } } 
        dataField="time"
      >
        TIME
      </TableHeaderColumn>
      <TableHeaderColumn
        thStyle={ { whiteSpace: 'normal', width: '15%'} } 
        tdStyle={ { whiteSpace: 'normal', width:"15%" } } 
        dataField="status"
        dataFormat={statusFormatter}
      >
        STATUS
      </TableHeaderColumn>
      <TableHeaderColumn
        thStyle={ { whiteSpace: 'normal', width: '15%'} } 
        tdStyle={ { whiteSpace: 'normal', width:"15%" } } 
        dataField="position"
      >
        POSITION
      </TableHeaderColumn>
      <TableHeaderColumn
        thStyle={ { whiteSpace: 'normal', width: '25%'} } 
        tdStyle={ { whiteSpace: 'normal', width:"25%" } } 
        dataField="type"
      >
        TYPE
      </TableHeaderColumn>
      <TableHeaderColumn
         thStyle={ { whiteSpace: 'normal', width: '35%'} } 
         tdStyle={ { whiteSpace: 'normal', width:"35%" } } 
        dataField="name"
      >
        NAME
      </TableHeaderColumn>
    </BootstrapTable>
  )
}

  return (
    <div >
       <CRow>
        <CCol>
        <p style={{fontSize:"20px", fontWeight:"bold"}}>Gate Scanner</p>
        </CCol>
      </CRow>
     <CCard>
       <CCardBody>
         {filterReport()}
       </CCardBody>
     </CCard>
     <CCard>
       <CCardBody>
         {itemList()}
       </CCardBody>
     </CCard>
    </div>
  )
}

export default GateScanner;