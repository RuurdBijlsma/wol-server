const wol = require('node-wol');

wol.wake('B4:2E:99:31:BE:4E', {
    address: '192.168.178.18',
    port: 7
}, function (error) {
    if (error) {
        console.log("Error", error);
        return;
    } else {
        console.log("Success");
    }
});
console.log("Done!");