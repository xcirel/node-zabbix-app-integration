var ZabbixSender = require('node-zabbix-sender');
var Sender = new ZabbixSender({host: 'http://zabbix.devops-lab.click'});
 
// Add items to request
Sender.addItem('webserver', 'httpd.running', 0);
Sender.addItem('dbserver', 'mysql.ping', 1);
 
// Add item with default host
Sender.addItem('httpd.logs.size', 1024);
 
// Send the items to zabbix trapper
Sender.send(function(err, res) {
    if (err) {
        throw err;
    }
 
    // print the response object
    console.dir(res);
});