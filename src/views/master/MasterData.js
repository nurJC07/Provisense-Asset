import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCardBody,
  CCol,
  CLabel,
  CInput,
  CRow,
  CForm,
  CFormGroup,
  CTabContent,
  CTabPane,
  CTabs,
  CNav,
  CNavLink,
  CCard,
  CModal,
  CModalHeader,
  CModalBody
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import ItemList from '../../Database/itemList';
import ScannerList from '../../Database/scannerList';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { freeSet } from '@coreui/icons'
import Select from 'react-select'
import AlertModal from "../modal/AlertModal";
import InfoModal from "../modal/InfoModal";
import LocationOption from '../../Database/locationList';


const position = [
  { value: 'Pintu Masuk', label: 'Pintu Masuk' },
  { value: 'Pintu Keluar', label: 'Pintu Keluar' },
]

const MasterData = () => {
    const [selectedLocation, setSelectedLocation] = useState();
    const [selectedPosition, setSelectedPosition] = useState();
    const [addModalOpen, setaddModalOpen] = useState(false);
    const [addEditModalOpen, setaddEditModalOpen] = useState(false);
    const initialInfo = {isOpen: false, text: ""};
    const [infoModalData, setInfoModalData] = useState(initialInfo);

 
  const toggleOpenAdd = ()=>{
    setaddEditModalOpen(true);
    setaddModalOpen(true);
    
  }
  const toggleClose = ()=>{
    setaddEditModalOpen(false);
    setaddModalOpen(false);
    // setisEditing(false);
    // clearUserState();
  }

  const alertInfo=(text)=>{
    setInfoModalData({
      isOpen:true, text
    })
  }

  useEffect(() => {

   
  }, 
  [] )
  
  const viewAddEditRFID = ()=>{
    return(
      <CForm >
       <CRow>
        <CCol xs="12">
          <CFormGroup>
            <CLabel htmlFor="name">RFID ID</CLabel>
            <CRow>
            <CCol xs="9">
            <CInput id="name" placeholder="Enter your name" required />
            </CCol>
            <CCol xs="3">
            <CButton 
            type="submit"
            style={{padding:"6px 20px"}}
            size="sm" 
            color="success" 
          >
           <CIcon content={freeSet.cilQrCode}  />
            &nbsp; Scan
          </CButton>
            </CCol>
            </CRow>
            
          </CFormGroup>
        </CCol>
      </CRow>
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CLabel htmlFor="name">ID ITEM</CLabel>
              <CInput id="name" placeholder="Enter your name" required />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
        <CCol xs="12">
          <CFormGroup>
            <CLabel htmlFor="name">TYPE</CLabel>
            <CInput id="name" placeholder="Enter your name" required />
          </CFormGroup>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12">
          <CFormGroup>
            <CLabel htmlFor="name">NAME</CLabel>
            <CInput id="name" placeholder="Enter your name" required />
          </CFormGroup>
        </CCol>
      </CRow>
        <div style={{textAlign:"right"}}>
        <CButton 
            size="sm" 
            onClick={toggleClose} 
            // color="warning" 
            style={{padding:"6px 50px"}}
          >
            <i className="fa fa-window-close"></i> 
            Cancel
          </CButton>
          <CButton 
            // type="submit"
            // className="d-flex ml-auto"  
            size="sm" 
            // color="#1C54B2" 
            style={{padding:"6px 50px", background:"#1C54B2", fontWeight:"bold", fontSize:"14px",lineHeight:"19px",
            textAlign:"center",   color: "#FFFFFF"}}
          >
            <i className="fa fa-dot-circle-o"></i> 
            Save
          </CButton>{'  '}
         
        </div>

      </CForm>
    )
  }
  // handle onChange event of the dropdown
  const viewAddEditScanner = ()=>{
    return(
      <CForm >
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CLabel htmlFor="name">SCANNER ID</CLabel>
              <CInput id="name" placeholder="Enter Scanner ID" required />
            </CFormGroup>
          </CCol>
        </CRow>
      <CRow>
        <CCol xs="12">
          <CFormGroup>
            <CLabel htmlFor="name">LOCATION</CLabel>
            <Select
              isSearchable
              value={LocationOption.find(obj => obj.value === selectedLocation)} // set selected value
              options={LocationOption} // set list of the data
              onChange={(e) => setSelectedLocation(e.value)} // assign onChange function
            />
          </CFormGroup>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12">
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
        <div style={{textAlign:"right"}}>
        <CButton 
            size="sm" 
            onClick={toggleClose} 
            // color="warning" 
            style={{padding:"6px 50px"}}
          >
            <i className="fa fa-window-close"></i> 
            Cancel
          </CButton>
          <CButton 
            // type="submit"
            // className="d-flex ml-auto"  
            size="sm" 
            // color="#1C54B2" 
            style={{padding:"6px 50px", background:"#1C54B2", fontWeight:"bold", fontSize:"14px",lineHeight:"19px",
            textAlign:"center",   color: "#FFFFFF"}}
          >
            <i className="fa fa-dot-circle-o"></i> 
            Save
          </CButton>{'  '}
         
        </div>

      </CForm>
    )
  }
const itemList = ()=>{
  const customBtnGroup = (props)=>{
    return (
      <div>
        <CButton className="mr-2" onClick={() => toggleOpenAdd()} color="primary">
          <i className="fa fa-plus"></i>+ Attach New RFID
        </CButton>
      </div>
  )
  }

  const actionFormatter = (props)=>{
    return (
      <div className="row ">
        <CButton className="mr-3" onClick={() => toggleOpenAdd()}>
        <CIcon content={freeSet.cilPencil} className='text-success' />
        </CButton>
        <CButton onClick={() => toggleOpenAdd()} >
        <CIcon content={freeSet.cilTrash} className='text-danger' />
        </CButton>
      </div>
    )
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
      searchPosition: 'left',
      btnGroup: customBtnGroup,
      noDataText: 'No data(s) found. Please try again by using another keyword.'
    }
  
    return(
      <div>
      <BootstrapTable data={ItemList} 
      striped hover pagination search edit options={options} 
      exportCSV version='4' headerStyle={{textAlign:"Left"}} dataAlign="left"
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
        <TableHeaderColumn
           thStyle={ { whiteSpace: 'normal', width: '35%'} } 
           tdStyle={ { whiteSpace: 'normal', width:"35%" } } 
           dataFormat={actionFormatter}
         
        >
          ACTION
        </TableHeaderColumn>
      </BootstrapTable>
     
     <CModal show={addEditModalOpen}  backdrop="static" >
          <CModalHeader>Attach New RFID</CModalHeader>
          <CModalBody>{viewAddEditRFID()}</CModalBody>
        </CModal>


     <InfoModal
         isOpen={infoModalData.isOpen}
         title="Berhasil"
         btnConfirmOnClick={()=>setInfoModalData(initialInfo)}
       >
         {infoModalData.text}
     </InfoModal>
     </div>
    )
  }
const scannerList = ()=>{
  const customBtn = (props)=>{
    return (
      <div>
        <CButton className="mr-2" onClick={() => toggleOpenAdd()} color="primary">
          <i className="fa fa-plus"></i>+ Add New Scanner
        </CButton>
      </div>
    )
  }

  // handle onChange event of the dropdown
 
const actionFormatter = (props)=>{
  return (
    <div className="row ">
      <CButton className="mr-3" onClick={() => toggleOpenAdd()}>
      <CIcon content={freeSet.cilPencil} className='text-success' />
      </CButton>
      <CButton onClick={() => toggleOpenAdd()} >
      <CIcon content={freeSet.cilTrash} className='text-danger' />
      </CButton>
    </div>
  )
}

var options = {
      sizePerPageList: [
        {text: 'lihat 5', value: 5},
        {text: 'lihat 10', value: 10},
        {text: 'lihat 15', value: 15}
      ],
      sizePerPage: 10,
      sortName: 'id',
      searchPosition: 'left',
      btnGroup: customBtn,
      noDataText: 'No data(s) found. Please try again by using another keyword.'
    }
  
    return(
      <div>
      <BootstrapTable data={ScannerList} striped hover pagination search edit options={options} exportCSV version='4' dataAlign="left" searchPlaceholder={"Pencarian...."}   >
        <TableHeaderColumn  isKey thStyle={{whiteSpace: 'normal', width: '10%'}} tdStyle={{whiteSpace: 'normal', width:"10%"}} dataField="id"> SCANNER ID
        </TableHeaderColumn>
        <TableHeaderColumn thStyle={ { whiteSpace: 'normal', width: '10%'} } tdStyle={ { whiteSpace: 'normal', width:"10%" } }  dataField="location">LOCATION 
        </TableHeaderColumn>
        <TableHeaderColumn
          thStyle={ { whiteSpace: 'normal', width: '25%'} } 
          tdStyle={ { whiteSpace: 'normal', width:"25%" } } 
          dataField="position"> POSITION
        </TableHeaderColumn>
        <TableHeaderColumn
           thStyle={ { whiteSpace: 'normal', width: '35%'} } 
           tdStyle={ { whiteSpace: 'normal', width:"35%" } } 
           dataFormat={actionFormatter} >  ACTION
        </TableHeaderColumn>
      </BootstrapTable>
      <CModal show={addEditModalOpen}  backdrop="static" >
          <CModalHeader>Attach New RFID</CModalHeader>
          <CModalBody>{viewAddEditScanner()}</CModalBody>
        </CModal>


     <InfoModal
         isOpen={infoModalData.isOpen}
         title="Berhasil"
         btnConfirmOnClick={()=>setInfoModalData(initialInfo)}
       >
         {infoModalData.text}
     </InfoModal>
     </div>
    )
  }
  
  return (
    <div>
      <CRow>
        <CCol>
        <p style={{fontSize:"20px", fontWeight:"bold"}}>Master Data</p>
        </CCol>
      </CRow>
      <CTabs activeTab="home">
      <CNav variant="pills" className="flex-sm-row mb-2" style={{backgroundColor:"#fff"}}>
        <CNavLink className="flex-sm-fill text-sm-center" style={{borderRradius: "8px 0px 0px 8pxx"}} data-tab="home">RFID</CNavLink>
        <CNavLink className="flex-sm-fill text-sm-center" style={{borderRradius: "8px"}} data-tab="profile">SCANNER</CNavLink>
      </CNav>
      <CTabContent>
      <CTabPane data-tab="home">
        <CCard>
        <CCardBody>
        {itemList()}
        </CCardBody>
        </CCard>
        </CTabPane>
        <CTabPane data-tab="profile">
        <CCard>
        <CCardBody>
        {scannerList()}
        </CCardBody>
        </CCard>
      </CTabPane>
      </CTabContent>
    </CTabs>
   
    </div>
  )
}

export default MasterData;
