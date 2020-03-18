'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _canonize = require('./canonize');

var _canonize2 = _interopRequireDefault(_canonize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.get('/', function m(req, res) {
    console.log(req.query);
    return res.json({
        qwe: 123456,
        something: [1, 2, 3, 4, 5, 6]
    });
    // res.send('Hello world');
});
app.get('/8080', function (req, res) {
    res.send('Bye world');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// const urls = [
//     'telegram.me/SkillBranch',
//     'https://telegram.me/SkillBranch',
//     'Http://telegram.me/skillbranch',
//     '@skillbranch',
//     'skillbranch',
//     'vk.com/skillbranch',
//     'vk.com/skillbranch/profile',
//     'http://vk.com/skillbranch',
//     'https://vk.com/skillbranch/profile'
// ];  


// urls.forEach((url) => {
//     const username = canonize(url);
//     console.log(username[6]);
// });

// function Parser() {
//     const spawn = require("child_process").spawn;
//     const parser = spawn('python3',["parser.py"]);

//     parser.stdout.on('data', function(data) {
//         console.log(data.toString());
//     });
// }
// function Hello() {
//     var module = require("./hello.js");
//     module.hello();
// }