const ljson = require('lisa.json')
exports.toJson = (data, options) => {
    options = options || {}
    options.delimiter = options.delimiter || ","
    var content = data
    if (!content || typeof content !== "string") {
        throw new Error("Invalid CSV Data");
    }
    content = content.split(/[\n\r]+/gi);
    var Columns = content.shift().split(options.delimiter),
        jsonObject = [];

    content.forEach(function (item) {
        if (item) {
            // ,"sdfdsf,sdfsdf,",  
            if(options.delimiter == ','){
                item = splitCsvRow(item)
            }else
                item = item.split(options.delimiter);
            var hashItem = {}
            Columns.forEach(function (c, i) {
                //hashItem[c] = item[i];
                ljson(hashItem).set(c ,item[i])
            })
            jsonObject.push(hashItem);
        }
    })
    return jsonObject
}

//"sdf	bsf"	sdfsdf,sfsdf	"sfsdf,sdfsd	sdfd,sdf"
//csv :  """sdf",bsf","sdfsdf,sfsdf","""sfsdf,sdfsd","sdfd,sdf"""

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
  