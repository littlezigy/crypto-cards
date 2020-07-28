// var web3 = new Web3("http://localhost:7545");
var web3 = new Web3(window.ethereum);

<<<<<<< Updated upstream
if (typeof web3 !== undefined) {
    console.log("Web3 Detected!\n" + window.web3.currentProvider.constructor.name);
    console.log('lets play blackjack')

    (() => {
        return web3.eth.getAccounts()
            .then(res => {
                res.forEach(account => {
                    accountsDiv.innerHTML += `<p style="color:blue;">${account} <span style="color:black;">is in the game queue</span></p>`;
                });
                return BlackJackContract.methods.getPlayerName().call();

            }).then(res => {
                nameDiv.innerHTML += res;
                return betUpdate();

            }).then(res => {
                // betDiv.innerHTML += res;

            }).then(res => {

                return BlackJackContract.methods.setBet(bet1value).send({ from: "0x4f8e3a724d5CfbBE9e1152dFB5A3920ccA5e89e8" });
            })
    })();
} else {
    App.web3Provider = new web3.providers.HttpProvider('http://127.0.0.1:7545');
    web3 = new Web3(App.web3Provider);
}
=======

let blackjackContract = new web3.eth.Contract(blackjackAbi, '0x4b5589797FaE4BC7aceC6d93Dab165E3461Ee26a');
let vrfContract = new web3.eth.Contract(chainlinkVRFabi, '0x9424f711C01bD712990EA686dB4F7caA1c14f074');
let chipContract = new web3.eth.Contract(chipVRFabi, '0x93e35437D822b815E43c32aF08706895efc2EE37');

let account;

let betDiv = document.getElementById('bet');
let betValue1 = document.getElementById('bet1value');

let betUpdate = function () {
    console.log(betValue1.value);
    if(!account || account == undefined)
        console.error("Set account first");
    return BlackJackContract.methods.setBet(betValue1.value).send({from: account})
    .then(res => {
        return BlackJackContract.methods.getBet().call()
    })
    .then(res => {
        betDiv.innerHTML += res;
    })
}
        

if (typeof web3 !== undefined) {
    console.log("Web3 Detected!\n" + window.web3.currentProvider.constructor.name);
    console.log('lets play blackjack');
    // let BlackJackContract = new web3.eth.Contract(, '0x02645FFa8aeE06867E0A81e9D80800217e4c299e');

    (() => {
        let accountsDiv = document.getElementById('accounts');
        let nameDiv = document.getElementById('name');
        let betDiv = document.getElementById('bet');

        let v = 300;
        let pot = document.getElementById('pot');
        let timer = document.getElementById('timer');
        let dealerScore = document.getElementById('dealerscore');
        let accountsDiv = document.getElementById('accounts');
        let nameDiv = document.getElementById('name');
        //Set pot
        pot.innerHTML = v;
        //pot.innerHTML -= 90;

        //initialize and reset timer
        let timeLeft = 15;
        let timerId = setInterval(t, 1000)
        function t() {
            i = 0;
            if (timeLeft == -1) {
                clearTimeout(timerId);
            } else {
                timer.innerHTML = timeLeft;
                timeLeft--;
                if (timeLeft == 0) {

                    console.log('times up');
                    // console.log(lowerhand[i].rank);
                    // console.log(upperhand[i].rank);
                    // console.log(dealerhand[i].rank);
                    // lowerhand.addCard(deck.topCard());
                    // lowerhand.render();
                    // upperhand.addCard(deck.topCard());
                    // upperhand.render();
                    dealerhand.addCard(deck.topCard());
                    dealerScore.innerHTML = dealerhand[0].rank + dealerhand[1].rank + dealerhand[2].rank;
                    dealerhand.render();
                    alert('You lose');
                    if (dealerhand.length <= 2) {
                        timeLeft = 30;

                        i++;
                    }
                    // timeLeft = 30;
                }
            }
        }


        return web3.eth.getAccounts()
        .then(res => {
            <<<<<<< Updated upstream
                res.forEach(account => {
                    accountsDiv.innerHTML += `<p style="color:blue;">${account} <span style="color:black;">is in the game queue</span></p>`;
                });

            }).then(res => {
                nameDiv.innerHTML += res;
                return betUpdate();

            }).then(res => {
                // betDiv.innerHTML += res;

            }).then(res => {

                return BlackJackContract.methods.setBet(bet1value).send({ from: "0x4f8e3a724d5CfbBE9e1152dFB5A3920ccA5e89e8" });
            })
            ================================
                res.forEach(account => {
                    // accountsDiv.innerHTML += `<p>${account}</p>`;
                    accountsDiv.innerHTML += `<p style="color:blue;">${account} <span style="color:black;">is in the game queue</span></p>`;
                    return BlackJackContract.methods.getPlayerName().call();
                });
                let acc1 = res[0].substring(0,10);
                nameDiv.innerHTML += acc1 + '...';

                // Give each player 50 chips
                return chipContract.methods.transferFrom('0xd298eFF51cd039ED010A6ec4Ee2C3C0ECC36dF3E', acc1, 10);
            }).then(res => {
                return blackjackContract.methods.getPlayerName().call();
             }).then(res => {
                nameDiv.innerHTML += res;
                return blackjackContract.methods.getBet().call();
            }).then(res => {
                // console.log('NAMMEEE', res);
                betDiv.innerHTML += res;
            })
    })();
} else {
    App.web3Provider = new web3.providers.HttpProvider('http://127.0.0.1:7545');
    web3 = new Web3(App.web3Provider);
}

//    document.querySelector('div#player1 > span.balance');
//    document.querySelector('div#player2 > span.balance');

