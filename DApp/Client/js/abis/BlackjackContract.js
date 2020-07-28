var blackjackAbi =
[
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "setBet",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "p",
                "type": "string"
            }
        ],
        "name": "setPlayerName",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "p",
                "type": "uint256"
            }
        ],
        "name": "setPot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "c",
                "type": "uint256"
            }
        ],
        "name": "setRank",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "s",
                "type": "string"
            }
        ],
        "name": "setSuit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "shuffleDeck",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBet",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBlackjackPlayer",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "playername",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "card",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "suit",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "bet",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Blackjack.BlackJackPlayer",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDeck",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "d",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlayerName",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRank",
        "outputs": [
            {
                "inputs": [],
                "name": "geta",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSuit",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
    /*
    // Truffle console
    [
  {
    inputs: [ [Object] ],
    stateMutability: 'nonpayable',
    type: 'constructor',
    constant: undefined,
    payable: undefined
  },
  {
    anonymous: false,
    inputs: [ [Object] ],
    name: 'FillingDeck',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature: '0x280a9bbf14a74773ae5f7fbebddd46d5feef32ab6b1930f1bee5496f76c15235'
  },
  {
    inputs: [ [Object] ],
    name: 'deck',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x65b1dafa'
  },
  {
    inputs: [ [Object] ],
    name: 'setPlayerName',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0xd8177369'
  },
  {
    inputs: [ [Object] ],
    name: 'setRank',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0x8557e1ee'
  },
  {
    inputs: [ [Object] ],
    name: 'setSuit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0xb61da41f'
  },
  {
    inputs: [ [Object] ],
    name: 'setBet',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    payable: true,
    constant: undefined,
    signature: '0xe8399cc6'
  },
  {
    inputs: [ [Object] ],
    name: 'setPot',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0x80b5b80c'
  },
  {
    inputs: [],
    name: 'getPlayerName',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0xa69c6597'
  },
  {
    inputs: [],
    name: 'getRank',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0xd303e7b2'
  },
  {
    inputs: [],
    name: 'getSuit',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0xf9732960'
  },
  {
    inputs: [],
    name: 'getBet',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x20835e8c'
  },
  {
    inputs: [],
    name: 'getBlackjackPlayer',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0xe22e5492'
  },
  {
    inputs: [],
    name: 'shuffleDeck',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0xb0a3beaf'
  },
  {
    inputs: [],
    name: 'calcPoints',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0xf6fc28c9'
  },
  {
    inputs: [],
    name: 'getDeck',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x33943474'
  }
]
    */
