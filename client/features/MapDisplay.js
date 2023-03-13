import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios'
// import {useSelector} from 'react-redux'


// const originCoords = useSelector((state)=> state.userIconContainer)
// console.log(originCoords)


function findMidpoint(arrayOfGeocodes){

  // variables to hold the sum of
  let xSums = 0;
  let ySums = 0;
  let numOfLocations = arrayOfGeocodes.length

  // finds the sums of x and y
  arrayOfGeocodes.forEach((currCords)=>{
      xSums += Number(currCords.lat)
      ySums += Number(currCords.lng)
  })

  return {
      lat : xSums / numOfLocations,
      lng : ySums / numOfLocations
  }
}

let label = [];
const generateLabel = async () =>{

    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.883166%2C-73.853427&radius=1500&type=restaurant&key=AIzaSyAqXxaH6gF-h75feDtCx12dYpMkjdQL_1o')
    .then((data)=> {
        let name = data.data.results[0]['name'];
        let address = data.data.results[0]['vicinity'];
        console.log(name, address)
        label.push(`${name} ${address}`);
    })
    
}
generateLabel()
console.log('label',label)


// Pull from state
const coordinates = [{lat : 40.71326030739842, lng: -74.00728359309215}, {lat : 40.74382577221735, lng: -73.99384133506773}]



// const generateHang = async ()=>{
//   let coords = findMidpoint(coordinates);
//   const hangLocation = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords}&radius=1500&type=restaurant&key=AIzaSyAqXxaH6gF-h75feDtCx12dYpMkjdQL_1o`)
  
//   return `${hangLocation.data.results[0]['name']} ${hangLocation.data.results[0]['vicinity']}`
// }

// const description = generateHang();
// console.log(description)

const containerStyle = {
  width: '800px',
  height: '800px',
  borderRadius:'10px',
  border: '1px solid grey'
};


const onLoad = marker => {
  console.log('marker: ', marker)
}

function MapDisplay() {

  return (
    <>
    <div>
    <LoadScript
      googleMapsApiKey='AIzaSyAqXxaH6gF-h75feDtCx12dYpMkjdQL_1o'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={findMidpoint(coordinates)}
        zoom={18}
      >
        <Marker 
              onLoad={onLoad}
              position={findMidpoint(coordinates)}
              animation="bounce"
              // icon = "https://pbs.twimg.com/profile_images/443395572783800322/nXTuit5o_400x400.jpeg"
              label = {{
                text: {label},
                color: "#4682B4",
                fontSize: "16px",
                fontWeight: "bold",
              }}


        />
      </GoogleMap>
    </LoadScript>
    </div>
    </>
  )
}
// const HangTypes ={
// foodAndFun : "bar",
// study : "cafe",
// activity : "tourist_attraction",
// }









export default React.memo(MapDisplay)