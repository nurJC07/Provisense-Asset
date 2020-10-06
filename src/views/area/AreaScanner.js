import React, { lazy, useState, useEffect } from 'react'
import {CCard, CCardBody,} from '@coreui/react';
import ItemList from '../../Database/itemList';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


const WidgetScanner = lazy(() => import('../widgets/WidgetScanner.js'))
const AreaScanner = () => {

  // set value for default selection
  const [selectedLocation, setSelectedLocation] = useState('');
  const [scannerID, setSelectedScanner] = useState("");
  const [total, setTotalBound] = useState('')
 

  useEffect(() => {
    var TotalList = ItemList.filter(item => item.location === selectedLocation)
      
    setTotalBound(TotalList)
    setSelectedLocation("Gudang A")
    setSelectedScanner('IDS001')
    // setSelectedValue(selectedValue)
  }, 
  [selectedLocation] )
  
  // handle onChange event of the dropdown
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
      <BootstrapTable data={total} striped hover pagination edit options={options} version='4' dataAlign="Left">
        <TableHeaderColumn 
           thStyle={ { whiteSpace: 'normal', width: '10%'} } 
           tdStyle={ { whiteSpace: 'normal', width:"10%" } } 
          isKey
          dataField="rfid"
        >
         RFID ID
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
      <WidgetScanner  scannerID={scannerID} location={selectedLocation} dataTotal={total} />
      <CCard>
        <CCardBody>
        {itemList()}
        </CCardBody>
      </CCard>
    
    </div>
  )
}

export default AreaScanner;
