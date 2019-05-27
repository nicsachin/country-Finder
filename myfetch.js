
module.exports = async function myfetch(url , country ,headers ,  cb)
{

     console.log('!!! fetch function called' , url+`${country}`)
const data = await require('node-fetch')(url+`${country}`,{
   headers
})

const jso = await data.json()
cb(jso)
}
