var web3 = new Web3(window.ethereum);

// let blackjackContract = new web3.eth.Contract(blackjackAbi, '0x73a911812144Ec1b329bE6caF51227e76802A366');
let blackjackContract = new web3.eth.Contract(blackjackAbi, '0x7808119Ac73671C7e1Ee35037705386E44F1D268');
// let vrfContract = new web3.eth.Contract(chainlinkVRFabi, '0x9424f711C01bD712990EA686dB4F7caA1c14f074');
let cardDeckContract = new web3.eth.Contract(cardDeckabi, '0x6409d82DA6Bc8571a2BDC2BD335523EE7a3BeAB9');
let chipContract = new web3.eth.Contract(chipVRFabi, '0x93e35437D822b815E43c32aF08706895efc2EE37');

let account;

let betDiv = document.getElementById('bet');
let betValue1 = document.getElementById('bet1value');
let userAddr;

let betUpdate = function () {
    console.log('Updating bet', betValue1.value);
    let from = web3.eth.defaultAccount;
    if (!from || from == undefined)
        console.error("Connect wallet");

    return blackjackContract.methods.setBet(betValue1.value).send({ from })
    .then(res => {
        return blackjackContract.methods.getBet().call()
    })
    .then(res => {
        console.log('BET UPDATED', res);
        betDiv.innerHTML = res;
        return updatePot();
    })
}

let updatePot = function() {
    return blackjackContract.methods.getPot().call()
    .then(res => {
        console.log('POTTT', res);
        let pot = document.getElementById('pot');
        pot.innerHTML = res;
    });
}

let collectWinnings = function () {
    console.log('WINNINGS COLLECTECD');
    let addr = web3.eth.defaultAccount;
    return chipContract.methods.transferFrom('0x26760Bf0A16E89b0780f4B93517C289326E41279', addr, 2).send()
    .then(res => {
        e.parentNode.style.display = 'none';
    });
}

let closeDialog = function(e) {
    e.parentNode.style.display = 'none';
}

let win = function (_win = true, scoreObj) {
    console.log('WHAT IS RESSS', _win);
    let title;
    const { you, dealer } = scoreObj;
    let extraInfo = `<p>Your Score: ${ you }</p><p>Dealer Score: ${ dealer }</p>`

    if(_win === true) {
        title = 'You won!';
        extraInfo += ` <button id = 'collect_winnings' onclick = 'collectWinnings(e)'>Collect Your Winnings</button>`
    }
    else {
        title = 'You lost!';
        extraInfo += ` <button id = 'close' onclick = 'closeDialog(this)'>Close</button>`
    }

    let popupHtml = `
        <div id = 'winner_popup'>
            <h2 style="margin-top: 50px;">${ title }</h2>
            ${ extraInfo }

        </div>

        <style>
        div#winner_popup > button {
            margin: auto;
            display: block;
            padding: 0.8em;
        }

        div#winner_popup {
            position: absolute;
            z-index: 999;
            margin: auto 0
            position: absolute;
            top: 50%;
            right: 25%;
            padding: 2em;
            min-height: 200px;
            min-width: 400px;
            background: white;
            box-shadow: 3px 4px 20px 15px #00000099;
            width: fit-content;
        }
        </style>
    `

    let popupElement = document.createElement('div');
    popupElement.innerHTML = popupHtml;
    popupElement.classList.add('popup');

    console.log('POPUP HTML', popupElement);

    setTimeout(function() {
        document.body.append(popupElement);
    }, 2000);
}

// win();

if (typeof web3 !== undefined) {
    console.log("Web3 Detected!\n" + window.web3.currentProvider.constructor.name);
    console.log('Let\'s play blackjack');

    (() => {
        let accountsDiv = document.getElementById('accounts');
        let nameDiv = document.getElementById('name');
        let betDiv = document.getElementById('bet');

        let v = 0;
        let timer = document.getElementById('timer');
        let dealerScore = document.getElementById('dealerscore');
        //Set pot
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
                res.forEach(account => {
                    // accountsDiv.innerHTML += `<p>${account}</p>`;
                    accountsDiv.innerHTML += `<p style="color:blue;">${account} <span style="color:black;">is in the game queue</span></p>`;
                    return blackjackContract.methods.getPlayerName().call();
                });
                let acc1 = res[0].substring(0, 10);
                web3.eth.defaultAccount = res[0];
                // nameDiv.innerHTML += acc1 + '...';

                console.log('LOADING CADDDD', res);
                let i = 1;
                return loadCards(i);
            }).then(res => {
                return blackjackContract.methods.getPlayerName().call();
            }).then(res => {
                nameDiv.innerHTML += res;
                return blackjackContract.methods.getBet().call();
            }).then(res => {
                // console.log('BET', res);
                betDiv.innerHTML += res;
                return updatePot();
                // return BlackJackContract.methods.setBet(bet1value).send({ from: "0x4f8e3a724d5CfbBE9e1152dFB5A3920ccA5e89e8" });
            });
    })();
} else {
    App.web3Provider = new web3.providers.HttpProvider('http://127.0.0.1:7545');
    web3 = new Web3(App.web3Provider);
}
//    document.querySelector('div#player1 > span.balance');
//    document.querySelector('div#player2 > span.balance');
