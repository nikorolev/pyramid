let express = require('express');
let bodyParser = require("body-parser");

let app = express();

// setup JSON parser for POST requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function isPyramid(str) {

    let strArray = str.split('');
    let c, k;
    let hash = {};
    let nums = [];

    if(str === undefined || str === '') {
        return false;
    }

    for(let i in strArray) {
        c = strArray[i];
        if(hash[c] === undefined) {
            hash[c] = 1;
        } else {
            k = hash[c];
            hash[c] = k + 1;
        }
    }
    for(let i in hash) {
        k = hash[i];
        nums.push(k);
    }
    nums.sort();
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== (i + 1)) {
            return false;
        }
    }
    return true;
}

app.post('/pyramid/', function(req, res) {
    let str = req.body.input;

    let result = isPyramid(str);

    console.log('input: ' + str);
    res.set('Content-Type', 'application/json');
    res.send({'result': result});
});

app.listen(8090, function() {
    console.log('listening at port 8090');
});
