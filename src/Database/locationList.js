import ItemList from './itemList'


//Set LocationOptions
const locationList = ItemList.map(item => ({'label':item.location, 'value': item.location}))
// const location = [...new Set(locationList)];
const LocationOption = locationList.filter((v,i,a)=>a.findIndex(t=>(t.label === v.label && t.value===v.value))===i)

export default LocationOption;