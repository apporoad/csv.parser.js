# csv.parser.js
csv to json and json to csv , what is a pity that i must repeatly make the wheel


## just do it

```bash
npm i --save lisa.csv.parser.js
```


```js
const p = require('lisa.csv.parser.js')

const json = [
  {code: 'CA', name: 'California', hello : { name : '1'}},
  {code: 'TX', name: 'Texas'},
  {code: 'NY', name: 'New York'},
]
 
// delimiter default is  ','
(async()=>{
    var csv = await  p.toCsv(json, {delimiter : '\t'})

    console.log(csv)

    var json2 = p.toJson(csv , {delimiter : '\t'})

    console.log(JSON.stringify(json2))
})()

```