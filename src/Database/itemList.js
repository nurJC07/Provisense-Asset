import dayjs from 'dayjs';
import 'dayjs/locale/id';


const ItemList = [
    {
      id: 2349995012, 
      rfid: 2349 , 
      date:dayjs(new Date()).locale('id').format("DD-MMMM-YYYY"),
      time: "09:10:40", 
      status:"INBOUND", 
      type:"LAPTOP", 
      position:"Pintu Utara", 
      name:"LAPTOP ASUS X456", 
      location:"Gudang A"
    },
    {
      id: 2130492102,
      rfid:2130, 
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"),
      time: "08:20:40", 
      status:"OUTBOUND", 
      type:"LAPTOP",
      position:"Pintu Utara", 
      name:"LAPTOP HP ENVY 630", 
      location:"Gudang A"
    },
    {
      id: 2349504340, 
      rfid:2349,
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"),
      time: "10:10:40", 
      status:"INBOUND", 
      type:"MONITOR",
      position:"Pintu Utara", 
      name:"MONITOR LG MK2400", 
      location:"Gudang B"
    },
    {
      id: 2349995012,
      rfid:2349, 
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"),
      time: "08:10:40", 
      status:"INBOUND", 
      type:"LAPTOP", 
      position:"Pintu Selatan",
      name:"LAPTOP LENOVO IDEAPAD L310" , 
      location:"Gudang B"
    },
    {
      id: 2130492102, 
      rfid:2130,
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"), 
      time: "11:10:40",
      status:"OUTBOUND", 
      type:"LAPTOP", 
      position:"Pintu Utara",
      name:"MONITOR BENQ AT2600", 
      location:"Gudang A"
    },
    {
      id: 2349504340, 
      rfid:2349, 
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"), 
      time: "08:09:10", 
      status:"OUTBOUND", 
      type:"MONITOR",
      position:"Pintu Utara", 
      location:"Gudang C"
    },
    {
      id: 2349995012, 
      rfid:2349,
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"), 
      time: "08:08:40", 
      status:"INBOUND", 
      type:"LAPTOP",
      position:"Pintu Selatan", 
      name:"LAPTOP ASUS TUF GAMING" , 
      location:"Gudang A"
    },
    {
      id: 2130492102,
      rfid:2130,
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"),  
      time: "08:07:39", 
      status:"OUTBOUND", 
      type:"LAPTOP",
      position:"Pintu Utara", 
      name:"LAPTOP HP 2345", 
      location:"Gudang C"
     },
    {
      id: 2349504340,
      rfid:2349, 
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"), 
      time: "08:05:10", 
      status:"INBOUND", 
      type:"MONITOR",
      position:"Pintu Selatan", 
      name:"MONITOR LG MK2400", 
      location:"Gudang A"
     },
    {
      id: 2349995012,
      rfid:2349, 
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"), 
      time: "08:20:40", 
      status:"INBOUND", 
      type:"LAPTOP", 
      position:"Pintu Utara",
      name:"LAPTOP ASUS X456" , 
      location:"Gudang B"
    },
    {
      id: 2130492102, 
      rfid:2130,
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"), 
      time: "08:19:39", 
      status:"INBOUND", 
      type:"LAPTOP",
      position:"Pintu Selatan", 
      name:"LAPTOP HP ENVY 630", 
      location:"Gudang A" 
    },
    {
      id: 2349504340,
      rfid:2349, 
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"), 
      time: "08:19:10", 
      status:"OUTBOUND", 
      type:"MONITOR",
      position:"Pintu Selatan", 
      name:"MONITOR LG MK2400",
       location:"Gudang C"
    },
    {
      id: 2349995012, 
      rfid:2349,
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"), 
      time: "08:08:40", 
      status:"INBOUND", 
      type:"LAPTOP",
      position:"Pintu Selatan", 
      name:"LAPTOP ASUS TUF GAMING" , 
      location:"Gudang A"
    },
    {
      id: 2130492102,
      rfid:2130,
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"),  
      time: "08:07:39", 
      status:"OUTBOUND", 
      type:"LAPTOP",
      position:"Pintu Utara", 
      name:"LAPTOP HP 2345", 
      location:"Gudang C"
     },
    {
      id: 2349504340,
      rfid:2349, 
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"), 
      time: "08:05:10", 
      status:"INBOUND", 
      type:"MONITOR",
      position:"Pintu Selatan", 
      name:"MONITOR LG MK2400", 
      location:"Gudang A"
     },
    {
      id: 2349995012,
      rfid:2349, 
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"), 
      time: "08:20:40", 
      status:"INBOUND", 
      type:"LAPTOP", 
      position:"Pintu Utara",
      name:"LAPTOP ASUS X456" , 
      location:"Gudang E"
    },
    {
      id: 2130492102, 
      rfid:2130,
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"), 
      time: "08:19:39", 
      status:"INBOUND", 
      type:"LAPTOP",
      position:"Pintu Selatan", 
      name:"LAPTOP HP ENVY 630", 
      location:"Gudang E" 
    },
    {
      id: 2349504340,
      rfid:2349, 
      date:dayjs(new Date()).add('1', 'day').locale('id').format("DD-MMMM-YYYY"), 
      time: "08:19:10", 
      status:"OUTBOUND", 
      type:"MONITOR",
      position:"Pintu Selatan", 
      name:"MONITOR LG MK2400",
       location:"Gudang E"
    },
  ]
  
export default ItemList;