const p = require('./index')

const json = [
  {code: 'CA', name: 'California', hello : { name : '1'}},
  {code: 'TX', name: 'Texas'},
  {code: 'NY', name: 'New York'},
]
 
(async()=>{
    var csv = await  p.toCsv(json, {delimiter : '\t'})

    console.log(csv)

    var json2 = p.toJson(csv , {delimiter : '\t'})

    console.log(JSON.stringify(json2))
})()
