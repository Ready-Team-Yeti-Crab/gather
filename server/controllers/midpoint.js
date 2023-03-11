//https://math.stackexchange.com/questions/1599095/how-to-find-the-equidistant-middle-point-for-3-points-on-an-arbitrary-polygon
// https://gis.stackexchange.com/questions/12120/calculating-midpoint-from-series-of-latitude-and-longitude-coordinates#:~:text=The%20centroid%20of%20finitely%20many,by%20the%20number%20of%20points

// According to the GIS corner of stack overflow, this centroid equation (see the first link) to triangulate geo coordinates that are relativelty close together
// If they start getting farther a part you have to account for the curviture of the Earth🌎

// To find the center find the avg of the x coordinates and y coordinates respectively
function findMidpoint(arrayOfGeocodes){

    // variables to hold the sum of
    let xSums = 0;
    let ySums = 0;
    let numOfLocations = arrayOfGeocodes.length


    let hangCoords = []

    // finds the sums of x and y
    arrayOfGeocodes.forEach((currCords)=>{
        xSums += currCords[0]
        ySums += currCords[1]
    })


    // pushes X and Y sums / 2 onto hang array 
    hangCoords.push([(xSums / numOfLocations), (ySums / numOfLocations)])
    // returns midpoint hang geocode
    return hangCoords;
}

const coordinates = [[40.883166, -73.853427], [40.781133, -73.814527],[40.734104, -73.993636] ]

console.log( findMidpoint(coordinates))

module.exports = findMidpoint;
