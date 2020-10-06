import React, {useState, useEffect} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CLabel,
  CInput,
  CRow,
  CForm,
  CFormGroup,
} from '@coreui/react'
import ItemList from '../../Database/itemList';
import LocationList from '../../Database/locationList';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import Select from 'react-select';
import $ from 'jquery';


const position = [
  { value: 'All', label: 'All' },
  { value: 'Pintu Utara', label: 'Pintu Utara' },
  { value: 'Pintu Selatan', label: 'Pintu Selatan' },
]

const type = [
  { value: 'INBOUND', label: 'INBOUND' },
  { value: 'OUTBOUND', label: 'OUTBOUND' },
  { value: 'INBOUND & OUTBOUND', label: 'INBOUND & OUTBOUND' },
  { value: 'AREA', label: 'AREA' },
]

const Report = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedPosition, setSelectedPosition] = useState();
  const [selectedType, setSelectedType] = useState();
  const [startDate, setSelectedDate] = useState();
  const[endDate,setSelectedEndDate] = useState()

 useEffect(() => {

  $(function() {
    $('input[name="datetimes"]').daterangepicker({
      timePicker: true,
      timePicker24Hour: true,
      timePickerSeconds: true,
      startDate: dayjs(),
      endDate: dayjs(),
      locale: {
        format: 'M/DD/YYYY HH:mm:ss '
      }
    },function(start, end, label) {
      setSelectedDate(start) 
      setSelectedEndDate(end)
  });
})
 }, [])
 

const generateReport = () => {
  console.log(startDate, endDate)
  return (
    <div>
      <div style={{marginBottom:"24px", fontSize:"12px"}}>
    Specify your report want to view with the options below.
    </div>
    <CForm>
      <CRow className="mb-2">
        <CCol>       
          <CFormGroup>
            <CLabel htmlFor="name">LOCATION</CLabel>
            <Select
              isClearable
              isSearchable
              placeholder={LocationList[0]}
              value={LocationList.find(obj => obj.value === selectedLocation)} // set selected value
              options={LocationList} // set list of the data
              onChange={(e) => setSelectedLocation(e.value)} // assign onChange function
            />
          </CFormGroup>
        </CCol>
        <CCol>
          <CFormGroup>
            <CLabel htmlFor="name">TYPE</CLabel>
            <Select
              isClearable
              isSearchable
              defaultValue={type[0]}
              value={type.find(obj => obj.value === selectedType)} // set selected value
              options={type} // set list of the data
              onChange={(e) => setSelectedType(e.value)} // assign onChange function
            />
          </CFormGroup>
        </CCol>
      </CRow>
      <CRow>
        <CCol>       
          <CFormGroup>
            <CLabel htmlFor="name">DATE</CLabel>

           
            <CInput type="text" name="datetimes" 
            startDate={startDate}
            endDate={endDate}
          />
          </CFormGroup>
        </CCol>
        <CCol>
          <CFormGroup>
            <CLabel htmlFor="name">POSITION</CLabel>
            <Select
              isClearable
              isSearchable
              defaultValue={position[0]}
              value={position.find(obj => obj.value === selectedPosition)} // set selected value
              options={position} // set list of the data
              onChange={(e) => setSelectedPosition(e.value)} // assign onChange function
            />
          </CFormGroup>
        </CCol>
      </CRow>
      <br/>
      <div style={{textAlign:"center"}}>
        <CButton color="primary" >Generate Report</CButton>
      </div>
    </CForm>
    </div>
  )
}
const itemList = ()=>{
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
    <div>
    <BootstrapTable data={ItemList} 
    striped hover pagination edit options={options} 
    exportCSV version='4' headerStyle={{textAlign:"Left"}} dataAlign="left" >
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
        dataField="id"
        
      >
       ID ITEM
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
     
   </div>
  )
}



  return (
    <div >
       <CRow>
        <CCol>
        <p style={{fontSize:"20px", fontWeight:"bold"}}>Report</p>
        </CCol>
      </CRow>
     <CCard>
       <CCardBody>
         {generateReport()}
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

export default Report;