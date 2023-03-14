//https://math.stackexchange.com/questions/1599095/how-to-find-the-equidistant-middle-point-for-3-points-on-an-arbitrary-polygon
// https://gis.stackexchange.com/questions/12120/calculating-midpoint-from-series-of-latitude-and-longitude-coordinates#:~:text=The%20centroid%20of%20finitely%20many,by%20the%20number%20of%20points

const axios = require('axios')

// According to the GIS corner of stack overflow, this centroid equation (see the first link) to triangulate geo coordinates that are relativelty close together
// If they start getting farther a part you have to account for the curviture of the Earth🌎

// To find the center find the avg of the x coordinates and y coordinates respectively
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

const coordinates = [{lat : 40.883166, lng: -73.853427}, {lat : 41.883166, lng: -70.853427}]

console.log( findMidpoint(coordinates))
let label = '';
const findLocation = async () =>{

    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.883166%2C-73.853427&radius=1500&type=restaurant&key=AIzaSyAqXxaH6gF-h75feDtCx12dYpMkjdQL_1o')
    .then((data)=> {
        let name = data.data.results[0]['name'];
        let address = data.data.results[0]['vicinity'];
        console.log(name, address)
        label = `${name} ${address}`;
    })
    
    // console.log(hangLocation.data.results[0]['name'])
    // console.log(hangLocation.data.results[0]['vicinity'])

}
findLocation()
console.log('label',label)





module.exports = findMidpoint;
