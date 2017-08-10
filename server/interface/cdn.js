var express = require('express');
var router = express.Router();
var qs = require("querystring");

var fs = require('fs'),
    stdin = process.stdin,
    stdout = process.stdout;
var stats = [];


var profile,
// profile = 0;//线上
profile = 1;//王炜本地


//获取列表数据
router.get('/list', (req, res)=>{
  console.log(req.query.charAt);


    let charAt = req.query.charAt

    if(charAt == ''){
        let response = {code:0,desc:'没有数据'};
        res.contentType('json');
        res.send(response);
        return false;
    }

    let uri = '/opt/cdn/'
    if(profile == '1'){
        uri = '/Users/wangwei/cdn/libs/'
    }

    fs.readdir(uri, function(err, files) {
        
        
        if(!files.length){
            let response = {code:0,desc:'没有数据'};
            res.contentType('json');
            res.send(response);
            return false;
        }else{
            let rep = new RegExp(charAt+'(?!s)', 'i')
            let arrJs = files.filter((item, index)=>{
                return rep.test(item)
            })

            let response = {code:1,data:arrJs, desc:'success'};
            res.contentType('json');
            res.send(response);
            return false;
        }  

        




        // if (!files.length) {
        //     return console.log(' \033[31m No files to show!\033[39m\n');
        // }

        // function file(i) {

        //     var filename = files[i];


        //     fs.stat(__dirname + '/' + filename, function(err, stat) {
        //         stats[i] = stat;
        //         if (stat.isDirectory()) {
        //             console.log(' ' + i + ' \033[36m' + filename + '/\033[39m');
        //         } else {
        //             console.log(' ' + i + ' \033[90m' + filename + '\033[39m');
        //         }

        //         i++;

        //         if (i == files.length) {
        //             read();
        //         } else {
        //             file(i);
        //         }
        //     });
        // }

        // function read() {
        //     console.log(' ');
        //     stdout.write(' \033[33mEnter your choice : \033[39m');
        //     stdin.resume();
        //     stdin.setEncoding('utf8');
        //     stdin.on('data', option);
        // }

        // function option(data) {
        //     var filename = files[Number(data)];
        //     if (!files[Number(data)]) {
        //         stdout.write(' \033[mEnter your choice : \033[39m');
        //     } else if (stats[Number(data)].isDirectory()) {
        //         fs.readdir(__dirname + '/' + filename, function(err, files) {
        //             console.log(' ');
        //             console.log(' (' + files.length + 'files)');
        //             files.forEach(function(file) {
        //                 console.log(' - ' + file);
        //             });
        //             console.log(' ');
        //         });
        //     } else {
        //         stdin.pause();
        //         fs.readFile(__dirname + '/' + filename, 'utf8', function(err, data) {
        //             console.log(' ');
        //             console.log('\033[90m' + data.replace(/(.*) /g, ' $1') + '\033[39m');
        //         });
        //     }
        // }

        // file(0);
    });





    // var response = {code:-1,desc:'包含了敏感词汇'};
    // res.contentType('json');
    // res.send(response);
    // return false;
})










module.exports = router;