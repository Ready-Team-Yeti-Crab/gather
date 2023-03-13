
const key = 'AIzaSyAqXxaH6gF-h75feDtCx12dYpMkjdQL_1o'
app.get('/hang', async (req, res, next) => {
 try {
   const {data} = await axios.get(
// `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=${key}`
`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.763712820382324%2C-73.97776501914531&radius=1500&type=restaurant&key=${key}`
// `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${key}`
   )
   res.json(data)
   console.log(data)
   } 
 catch (err) {
  next(err)
}
})

const address = axios.get(
`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${key}`
    ).then((data)=> console.log(data))
  