import React, { lazy, useState, useEffect } from 'react'
import { CCol, CCard, CCardBody,CRow,CForm } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import ItemList from '../../Database/itemList';
import LocationOption from '../../Database/locationList'
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { freeSet } from '@coreui/icons'
import Select from 'react-select'



const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const Dashboard = () => {

  const [selectedValue, setSelectedValue] = useState("Gudang A");
  const [inBound, setInBound] = useState([]);
  const [outBound, setOutBound] = useState([]);
  const [total, setTotalBound] = useState([])
  const [date, setDate] = useState((new Date()))
 
  useEffect(() => {
    var inBoundList = ItemList.filter(item => item.location === selectedValue && item.status === 'INBOUND' && item.date===date )
    var outBoundList = ItemList.filter(item => item.location === selectedValue && item.status === 'OUTBOUND' && item.date === date)
    var TotalList = ItemList.filter(item => item.location === selectedValue && item.date === date )
      setInBound(inBoundList)
      setOutBound(outBoundList)
      setTotalBound(TotalList)
      setDate(dayjs(new Date()).locale('id').format("DD-MMMM-YYYY"))
    
  }, 
  [selectedValue, date] )
  
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.value);
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
          // dataFormat={(cell)=>dayjs(cell).format("HH:mm:ss")}
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
    <div>
      <CRow>
        <CCol>
        <p style={{fontSize:"20px", fontWeight:"bold"}}>{selectedValue}</p>
        </CCol>
        <CCol md="4" >
        <CForm style={{ marginLeft:"auto", borderRadius: '8px'}}>
        <Select
        isSearchable
        defaultValue={LocationOption[0]}
        value={LocationOption.find(obj => obj.value === selectedValue)} // set selected value
        options={LocationOption} // set list of the data
        onChange={handleChange} // assign onChange function

        />
         </CForm>
        </CCol>       
      </CRow>
      <WidgetsDropdown  dataInBound={inBound} dataOutBound={outBound} dataTotal={total} />
      <CCard>
        <CCardBody>
        {itemList()}
        </CCardBody>
      </CCard>
    
    </div>
  )
}

export default Dashboard
