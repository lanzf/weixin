var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



var SerialPort = require("serialport").SerialPort;  //引入模块
var portName = '/dev/tty.usbserial-A602JBTJ'; //定义串口名
var serialPort = new SerialPort(
 portName, {
   baudRate: 9600,  //波特率
   dataBits: 8,    //数据位
   parity: 'none',   //奇偶校验
   stopBits: 1,   //停止位
   flowControl: false
}, false);

router.get('/changecolor', function(req, res) {

    serialPort.open(function(error){
       if(error){
         console.log("打开端口"+portName+"错误："+error);
       }else{
        console.log("打开端口成功，正在监听数据中");
     //     serialPort.write("ls\n", function(err, results) {
		   //    console.log('err ' + err);
		   //    console.log('results ' + results);
	    // })
    	// serialPort.on('data', function(data) {
		 //   console.log('data received: ' + data +'\n');
		// });
		//serialPort.write(req.query.statu);
		serialPort.write(req.query.color);
       }
    	
    })
 });

module.exports = router;
