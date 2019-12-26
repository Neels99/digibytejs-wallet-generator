
var button = $('<button/>').html('Generate DGB Wallet').on('click', function(){

    const dgb = require('./node_modules/digibyte/index.js')

    var privateKey = new dgb.PrivateKey();
    var address = privateKey.toAddress();
    
    $("#privateKey").text(privateKey.toString())
    $("#publicKey").text(privateKey.toPublicKey().toString())
    $("#address").text(address.toString())
})
$(document).ready(function(){
    $("#DGBWallet").append(button)
})