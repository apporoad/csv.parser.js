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


var splitCsvRow = function(rowString){
  var cols = []
  var tempString = rowString
  while(tempString.length>0){
      value = ""
      if(tempString[0] == "\""){
          var index = tempString.indexOf("\",")
          if(index>-1){
              value = tempString.substring(1,index)
              tempString = tempString.substring(index +2)
          }else{
              if(tempString[tempString.length-1] == '"'){
                  value = tempString.substring(1,tempString.length-1)
                  tempString =""
              }
              else{
                  throw Error('error csv row :' + tempString)
              }
          }
      }else{
          var index = tempString.indexOf(",")
          if(index>-1){
              value = tempString.substring(0,index)
              tempString = tempString.substring(index +1)
          }else{
              value = tempString
              tempString = ""
          }
      }
      cols.push(value.replace(/""/g,"\""))
  }
  return cols
}


//"sdf	bsf"	sdfsdf,sfsdf	"sfsdf,sdfsd	sdfd,sdf"
//csv :  """sdf",bsf","sdfsdf,sfsdf","""sfsdf,sdfsd","sdfd,sdf"""

console.log(splitCsvRow('"sdf	bsf"	sdfsdf,sfsdf	"sfsdf,sdfsd	sdfd,sdf"'))

console.log(splitCsvRow('"""sdf",bsf","sdfsdf,sfsdf","""sfsdf,sdfsd","sdfd,sdf"""'))