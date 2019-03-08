const wol = require('node-wol');

wol.wake('B4-2E-99-31-BE-4E', function (error) {
    if (error) {
        console.log("packet not sent", error);
    } else {
        console.log("packet sent");
    }
});