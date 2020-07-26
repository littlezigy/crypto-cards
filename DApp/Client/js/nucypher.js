$(document).ready(function () {
    signature = web3.personal.sign(
      web3.fromUtf8('This is a signed message used to verify you are from the account you say. It costs nothing to do.'),
        account,
        (err, signature) => {
            console.log('Sig:');
            console.log(signature);
            console.log("Decrypting...");
  
            $.ajax({
                type: "POST",
                data: {
                  'signature': signature
                },
                url: 'decrypt/',
                dataType: 'html',
                success: function (data) {
                  $('#posts').html(data);
                }
            })
        }
    )
  
  
  })
  
  $("#buyfeed").click(function() {
    var priceEth = $('#salePrice').val();
    var depositEth = $('#deposit').val();
  
    console.log('Buy feed');
    console.log(priceEth)
    console.log(depositEth)
  
    var nuGame = web3.eth.contract(Blackjack).at('0x13a225FB5533bF144F8c484e0E5eD09A6aaDc45c');
    nuGame.buy.sendTransaction(web3.toWei(priceEth, 'ether'), {
        from: web3.eth.accounts[0],
        value: web3.toWei(priceEth, 'ether')
      },
    (err, res) => {
      if(err){
        console.log('Error');
        if(err.message.indexOf('revert Not enough') !== -1)
          alert('Not Enough');
        else
          console.log(err)
      }else{
        $('#currentPrice').html('Current Price (ETH): ' + priceEth);
        $('#currentPatron').html('Current Patron: ' + web3.eth.accounts[0]);
      }
    });
  
  })
  
  
  })