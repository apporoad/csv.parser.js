const p = require('./index')

const json = [
  {code: 'CA', name: 1, hello : { name : '1', age : 24, array : ['1',null,'2']}},
  {code: 'TX', name: 2},
  {code: 'NY', name: 3},
]
 
var hello = async ()=>{
    var csv = await  p.toCsv(json, {delimiter : '\t'})

    console.log(csv)

    var json2 = p.toJson(csv , {delimiter : '\t'})

    console.log(JSON.stringify(json2))
}

hello()
